// import { Injectable } from '@angular/core';

// import {
//   Destiny2Service,
//   DestinyHistoricalStatsDestinyActivityHistoryResults,
//   DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
// } from 'bungie-api-angular';
// import { BaseClanService } from '../base-clan.service';
import { BaseMemberActivityService } from '../base-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';

// import { MemberProfile, MemberActivityStats, MemberActivityTime } from 'bungie-models';
import { from, Observable } from 'rxjs';
import { mergeMap, map, toArray } from 'rxjs/operators';

import { clanMemberActivitySerializer } from './clan-member-activity.serializer';

import { StoreId } from '../app-indexed-db';

import { nowPlusDays } from '../../utility/date-utils';

import { MemberProfile } from 'projects/bungie-models/src/lib/models/MemberProfile';
import { MemberActivityStats } from 'projects/bungie-models/src/lib/models/MemberActivityStat';

export class ClanMemberActivityService extends BaseMemberActivityService {
  constructor(private clanDB: ClanDatabase, private baseApiKey: string) {
    super(clanDB, StoreId.MemberActivities, baseApiKey, new Date(2017, 5, 1), 120);
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
      mergeMap((characterId: number) => {
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
