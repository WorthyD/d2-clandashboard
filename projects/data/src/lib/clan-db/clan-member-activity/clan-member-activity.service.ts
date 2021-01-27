import { Injectable } from '@angular/core';

import {
  Destiny2Service,
  DestinyHistoricalStatsDestinyActivityHistoryResults,
  DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
} from 'bungie-api-angular';
import { BaseClanService } from '../base-clan.service';
import { BaseMemberActivityService } from '../base-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile, MemberActivityStats } from 'bungie-models';
import { from, of, Observable, defer, concat, EMPTY, forkJoin } from 'rxjs';
import { mergeMap, map, catchError, concatAll, mergeAll, toArray, mapTo, tap } from 'rxjs/operators';

import { clanMemberActivitySerializer } from './clan-member-activity.serializer';
import { DBObject, StoreId } from '../app-indexed-db';
import { nowPlusDays } from '../../utility/date-utils';

@Injectable()
export class ClanMemberActivityService extends BaseMemberActivityService {
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    // super(clanDB, StoreId.MemberActivities, d2Service, nowPlusDays(-365), 30);
    super(clanDB, StoreId.MemberActivities, d2Service, nowPlusDays(-30), 6); // TODO: remove this eventually for larger numbers
  }

  getAllActivitiesFromCache(clanId: number, memberProfiles: MemberProfile[]): Observable<MemberActivityStats[]> {
    return from(this.getAllDataFromCache(clanId.toString())).pipe(
      map((x) => {
        return this.groupActivitiesToMember(memberProfiles, x);
      })
    );
  }

  // TODO: Add progress indicator?
  updateAllActivityCache(clanId: number, memberProfiles: MemberProfile[]) {
    return from(memberProfiles).pipe(
      mergeMap((memberProfile) => {
        return from(memberProfile.profile.data.characterIds).pipe(
          mergeMap((characterId) => {
            // getFreshMemberCharacterActivity
            return this.getMemberCharacterActivity(clanId, memberProfile, characterId);
          })
        );
      }),
      tap((x) => {
        console.log('tapping', x);
      }),
      toArray()
    );
  }

  private groupActivitiesToMember(memberProfiles: MemberProfile[], allActivities: DBObject[]): MemberActivityStats[] {
    return memberProfiles.map((memberProfile) => {
      const memberProfileId = `${memberProfile.profile.data.userInfo.membershipType}-${memberProfile.profile.data.userInfo.membershipId}`;

      const memberActivitiesDB = allActivities.filter((x) => x.id.startsWith(memberProfileId));
      const memberActivitiesSerialized = memberActivitiesDB.map((activityDB) =>
        activityDB.data.map((activity) => clanMemberActivitySerializer(activity))
      );

      return {
        id: memberProfileId,
        activities: [].concat(...memberActivitiesSerialized)
      };
    });
  }

  getMemberCharacterActivitySerialized(
    clanId: number,
    member: MemberProfile,
    characterId: number,
    activityMode: number = 0
  ) {
    return this.getMemberCharacterActivity(clanId, member, characterId).pipe(
      map((activity) => {
        if (activityMode > 0) {
          activity = activity.filter((a) => a.activityDetails.modes.indexOf(activityMode) > -1);
        }
        return {
          activities: activity.map((a) => clanMemberActivitySerializer(a))
        };
      })
    );
  }

  getMemberActivity(clanId: number, member: MemberProfile, activityMode: number = 0): Observable<MemberActivityStats> {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId, activityMode);
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
