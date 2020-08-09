import { Injectable } from '@angular/core';
import { AllRaids } from '@destiny/models';
import { MemberProfile } from 'bungie-models';

import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api';
import { from, of } from 'rxjs';
import { switchMap, take, takeUntil, filter, withLatestFrom, mergeMap, toArray, map } from 'rxjs/operators';
import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';
// export interface MemberAggregateActivityStats {
//   member: any;
//   //  activityStats:
// }

// export interface RaidStats {
//   id: string;
// }

@Injectable({ providedIn: 'root' })
export class ClanRaidsService {
  readonly CONCURRENT_COUNT = 10;
  readonly TRACKED_STATS = ['activityCompletion'];
  readonly TACKED_ACTIVITIES = AllRaids.map((raid) => {
    return raid.hashes;
  }).reduce((acc, val) => acc.concat(val), []);

  constructor(private memberActivityService: MemberActivityStatsService) {}

  getClanRaidStats(clanId: number, clanMemberProfiles: MemberProfile[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberRaidStats(clanId, member);
      }, this.CONCURRENT_COUNT),
      toArray()
    );
  }

  private getMemberRaidStats(clanId: number, member: MemberProfile) {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId: number) => {
        return this.getCharacterRaidStats(clanId, member, characterId);
      }),
      toArray()
    );
  }

  private getCharacterRaidStats(clanId: number, memberProfile: MemberProfile, characterId: number) {
    return this.memberActivityService.getMemberCharacterActivityStatsSerialized(
      clanId,
      memberProfile,
      characterId,
      this.TACKED_ACTIVITIES,
      this.TRACKED_STATS
    );
  }
}
