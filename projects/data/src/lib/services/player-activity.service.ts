/*
  This file is essentially a duplicate of the clan-db player activities
  It's duplication makes me cry inside.
  I will fix this later.....lol... probably wont
*/

import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile, MemberActivityStats } from 'bungie-models';

import { mergeMap, map, catchError, toArray } from 'rxjs/operators';
import { Observable, of, from, defer, concat, EMPTY, forkJoin } from 'rxjs';
import { nowPlusDays } from '../utility/date-utils';
import {clanMemberActivitySerializer} from '../clan-db/clan-member-activity/clan-member-activity.serializer';

interface ActivityCollection {
  activities: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PlayerActivityService {
  private ACTIVITY_GET_COUNT = 250;
  public activityTypeId = 0;
  private startValue = nowPlusDays(-365);
  private maxRequestCount = 3;

  constructor(private d2ServiceBase: Destiny2Service) {}

  public getMemberCharacterActivityFromAPI(member: MemberProfile, characterId: number, pageNumber = 0) {
    return this.d2ServiceBase.destiny2GetActivityHistory(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType,
      this.ACTIVITY_GET_COUNT,
      this.activityTypeId,
      pageNumber
    );
  }
  private getAllRecentActivity(member: MemberProfile, characterId: number): Observable<ActivityCollection> {
    const maxConcurrentCount = 4;
    const fetchPage = (page = 0) => {
      return this.getMemberCharacterActivityFromAPI(member, characterId, page).pipe(
        map((x) => {
          const nextPage =
            this.activitiesContainExpiredYear(x?.Response?.activities, this.startValue) || page >= this.maxRequestCount
              ? null
              : page + maxConcurrentCount;

          const activities = x?.Response?.activities || [];
          return { activities, nextPage };
        })
      );
    };

    const getItems = (page) =>
      defer(() => fetchPage(page)).pipe(
        mergeMap(({ activities, nextPage }) => {
          const items$ = from(activities);
          const next$ = nextPage ? getItems(nextPage) : EMPTY;
          return concat(items$, next$);
        })
      );

    const batchedRequest = [];
    for (let i = 0; i < maxConcurrentCount; i++) {
      batchedRequest.push(getItems(i).pipe(toArray()));
    }

    return forkJoin(batchedRequest).pipe(
      map((x: any) => {
        return {
          activities: x.flat()
        };
      })
    );
  }
  private activitiesContainExpiredYear(activities, expiration) {
    if (!activities) {
      return true;
    }

    return !!activities.find((x) => {
      const activityYear = new Date(x.period);
      return activityYear <= expiration;
    });
  }


  getMemberCharacterActivitySerialized(
    member: MemberProfile,
    characterId: number,
    activityMode: number = 0
  ) {
    return this.getAllRecentActivity( member, characterId).pipe(
      map((activity) => {
        if (activityMode > 0) {
          activity.activities = activity.activities.filter((a) => a.activityDetails.modes.indexOf(activityMode) > -1);
        }
        return {
          activities: activity.activities.map((a) => clanMemberActivitySerializer(a))
        };
      })
    );
  }



  getMemberActivity(member: MemberProfile, activityMode: number = 0): Observable<MemberActivityStats> {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(member, characterId, activityMode);
      }),
      map((x) => {
        return x.activities;
      }),
      toArray(),
      map((x) => {
        return {
          id: `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}`,
          activities: [].concat(...x)
        };
      })
    );
  }
}
