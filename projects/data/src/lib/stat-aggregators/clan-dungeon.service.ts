import { Injectable } from '@angular/core';

import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';
import { AllDungeons, MemberProfile, ActivityStats } from '@destiny/models';
import { mergeMap, toArray, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanDungeonService {
  readonly CONCURRENT_COUNT = 10;
  readonly TRACKED_STATS = ['activityCompletions'];

  readonly TACKED_ACTIVITIES = AllDungeons.map((raid) => {
    return raid.hashes;
  }).reduce((acc, val) => acc.concat(val), []);

  constructor(private memberActivityService: MemberActivityStatsService) {}

  getClanDungeonStats(clanId: number, clanMemberProfiles: MemberProfile[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberDungeonStats(clanId, member);
      }, this.CONCURRENT_COUNT),
    );
  }

  private getMemberDungeonStats(clanId: number, member: MemberProfile): Observable<ActivityStats> {
    //console.log(member);
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId: number) => {
        return this.getCharacterDungeonStats(clanId, member, characterId);
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

  private getCharacterDungeonStats(clanId: number, memberProfile: MemberProfile, characterId: number) {
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
    AllDungeons.forEach((x) => {
      statsObj[x.key] = this.combineStatValues(stats, x.hashes);
    });
    return statsObj;
  }
  private combineStatValues(stats, activityHashes) {
    const statValues = {};

    this.TRACKED_STATS.forEach((x) => {
      const combinedValues = stats.reduce((prevCharact, character) => {
        const characterCompletions = activityHashes.reduce((prevHash, curHash) => {
          const activityCompletion = character.find((activity) => activity.activityHash === curHash)?.values?.[x]?.basic
            ?.value;

          return prevHash + (activityCompletion ? activityCompletion : 0);
        }, 0);
        return parseInt(prevCharact, 10) + characterCompletions;
      }, 0);

      statValues[x] = combinedValues;
    });

    return statValues;
  }
}
