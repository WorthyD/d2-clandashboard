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
import { mergeMap, map, catchError, concatAll, mergeAll, toArray, mapTo } from 'rxjs/operators';

import { clanMemberActivitySerializer } from './clan-member-activity.serializer';
import { StoreId } from '../app-indexed-db';

@Injectable()
export class ClanMemberActivityService extends BaseMemberActivityService {
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, StoreId.MemberActivities, d2Service, new Date(new Date().getFullYear() - 1, 0, 0), 30);
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
