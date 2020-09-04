import { Injectable } from '@angular/core';

import { Destiny2Service, DestinyHistoricalStatsDestinyActivityHistoryResults } from 'bungie-api';
import { BaseClanService } from '../base-clan.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile, MemberActivityStats } from 'bungie-models';
import { from, of, Observable, defer, concat, EMPTY } from 'rxjs';
import { mergeMap, map, catchError, concatAll, mergeAll, toArray, mapTo } from 'rxjs/operators';

import { clanMemberActivitySerializer } from './clan-member-activity.serializer';
import { StoreId } from '../app-indexed-db';

@Injectable()
export class ClanMemberActivityService extends BaseClanService {
  private ACTIVITY_GET_COUNT = 250;
  private MAX_REQUEST_COUNT = 30;

  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, StoreId.MemberActivities);
  }
  private getMemberActivityId(member: MemberProfile, characterId: number) {
    return `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}-${characterId}`;
  }

  private getMemberCharacterActivityFromAPI(member: MemberProfile, characterId: number, pageNumber = 0) {
    return this.d2Service.destiny2GetActivityHistory(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType,
      this.ACTIVITY_GET_COUNT,
      0,
      pageNumber
    );
  }

  getAllRecentActivity(member: MemberProfile, characterId: number) {
    const startYear = new Date().getFullYear() - 2;

    //const that = this;
    const fetchPage = (page = 0) => {
      return this.getMemberCharacterActivityFromAPI(member, characterId, page).pipe(
        //tap(() => console.log(`-> fetched page ${page}`)),
        map((x) => {
          const nextPage =
            this.activitiesContainExpiredYear(x?.Response?.activities, startYear) || page >= this.MAX_REQUEST_COUNT
              ? null
              : page + 1;

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

    return getItems(0).pipe(
      toArray(),
      map((activities) => {
        return { activities };
      })
    );
  }

  private activitiesContainExpiredYear(activities, expiredYear) {
    if (!activities) {
      return true;
    }
    return !!activities.find((x) => {
      const activityYear = new Date(x.period).getFullYear();
      // console.log(`${activityYear} ${expiredYear}`, activityYear <= expiredYear);
      return activityYear <= expiredYear;
    });
  }

  private getMemberCharacterActivity(
    clanId: number,
    member: MemberProfile,
    characterId: number
  ): Observable<DestinyHistoricalStatsDestinyActivityHistoryResults> {
    const characterActivityId = this.getMemberActivityId(member, characterId);
    return from(this.getDataFromCache(clanId.toString(), characterActivityId)).pipe(
      mergeMap((cachedData) => {
        if (this.isCacheValid(cachedData, 0, new Date(member.profile.data.dateLastPlayed))) {
          return of(cachedData.data);
        }

        return this.getMemberCharacterActivityFromAPI(member, characterId).pipe(
          map((activityResponse) => {
            if (activityResponse.Response) {
              this.updateDB(clanId, characterActivityId, activityResponse.Response);
              return activityResponse.Response;
            }
          }),
          catchError((error) => {
            if (cachedData && cachedData.data) {
              return of(cachedData.data);
            }
            throw error;
          })
        );
      })
    );
  }

  getMemberCharacterActivitySerialized(clanId: number, member: MemberProfile, characterId: number) {
    return this.getMemberCharacterActivity(clanId, member, characterId).pipe(
      map((activity) => {
        return {
          activities: activity.activities.map((a) => clanMemberActivitySerializer(a))
        };
      })
    );
  }
  getMemberActivity(clanId: number, member: MemberProfile): Observable<MemberActivityStats> {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
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
// const { defer, from, concat, EMPTY, timer } = rxjs; // = require("rxjs")
// const { mergeMap, take, mapTo, tap } = rxjs.operators; // = require("rxjs/operators")

// // simulate network request
// function fetchPage(page=0) {
//   return timer(100).pipe(
//     tap(() => console.log(`-> fetched page ${page}`)),
//     mapTo({
//       items: Array.from({ length: 10 }).map((_, i) => page * 10 + i),
//       nextPage: page + 1,
//     })
//   );
// }

// const getItems = page => defer(() => fetchPage(page)).pipe(
//   mergeMap(({ items, nextPage }) => {
//     const items$ = from(items);
//     const next$ = nextPage ? getItems(nextPage) : EMPTY;
//     return concat(items$, next$);
//   })
// );

// // process only first 30 items, without fetching all of the data
// getItems()
//  .pipe(take(30))
//  .subscribe(e => console.log(e));
// <script src="htt
