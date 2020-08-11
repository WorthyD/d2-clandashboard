import { Injectable } from '@angular/core';
import { AllRaids, MemberRaidStats } from '@destiny/models';
import { MemberProfile } from 'bungie-models';

import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api';
import { from, of, Observable } from 'rxjs';
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
  readonly TRACKED_STATS = ['activityCompletions'];
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

  private getMemberRaidStats(clanId: number, member: MemberProfile): Observable<MemberRaidStats> {
    console.log(member);
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId: number) => {
        return this.getCharacterRaidStats(clanId, member, characterId);
      }),
      toArray(),
      map((characterStats) => {
        //        console.log(characterStats);
        return {
          memberProfile: { profile: member.profile },
          stats: this.combineCharacterActivityStats(characterStats)
        };
      })
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
  private combineCharacterActivityStats(stats) {
    const statsObj = {};
    AllRaids.forEach((x) => {
      statsObj[x.key] = this.combineStatValues(stats, x.hashes);
    });
    return statsObj;
  }
  private combineStatValues(stats, activityHashes) {
    const statValues = {};

    this.TRACKED_STATS.forEach((x) => {
      const combinedValues = stats.reduce((prevCharact, character) => {
        //       console.log('prevCharact', prevCharact);

        const characterCompletions = activityHashes.reduce((prevHash, curHash) => {
          // console.log('prev', prevHash);
          // console.log('cur', curHash);

          const activityCompletion = character.find((activity) => activity.activityHash === curHash)?.values?.[x]?.basic
            ?.value;
          // console.log(character.find((activity) => activity.activityHash === curHash)?.values?.[x]?.basic
          //   ?.value);

          //console.log('-----------------------');
          // console.log(' prevHash', prevHash);
          //console.log('activityCompletion', activityCompletion ? activityCompletion : 0);
          // console.log('total', prevHash + (activityCompletion ? activityCompletion : 0));

          return prevHash + (activityCompletion ? activityCompletion : 0);
        }, 0);
        // console.log('prevCharact ', prevCharact);
        // console.log('parse ', parseInt(prevCharact, 10));
        // console.log('characterCompletions ', characterCompletions);
        // console.log('combo', parseInt(prevCharact, 10) + characterCompletions);

        return parseInt(prevCharact, 10) + characterCompletions;
      }, 0);
      //      console.log('combinedValues', combinedValues);

      statValues[x] = combinedValues;
    });

    return statValues;
  }
}
