import { Injectable } from '@angular/core';
import { AllRaids, MemberRaidStats, RaidInfo } from '@destiny/models';
import { MemberProfile, ClanMember } from 'bungie-models';

import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api-angular';
import { from, of, Observable, forkJoin } from 'rxjs';
import { switchMap, take, takeUntil, filter, withLatestFrom, mergeMap, toArray, map } from 'rxjs/operators';
// import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';
import { MemberMetricsService } from '../clan-db/member-metrics/member-metrics.service';
import { ProfileMilestonesService } from '../clan-db';
// export interface MemberAggregateActivityStats {
//   member: any;
//   //  activityStats:
// }

// export interface RaidStats {
//   id: string;
// }

@Injectable({ providedIn: 'root' })
export class ClanRaidDetailsService {
  readonly CONCURRENT_COUNT = 10;
  // readonly TRACKED_STATS = ['activityCompletions'];
  // readonly TACKED_ACTIVITIES = AllRaids.map((raid) => {
  //   return raid.hashes;
  // }).reduce((acc, val) => acc.concat(val), []);

  constructor(
    private memberMetricService: MemberMetricsService,
    private profileMilestonesService: ProfileMilestonesService
  ) {}

  getClanRaidDetailStats(clanId: number, clanMemberProfiles: ClanMember[], raidInfo: RaidInfo) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberRaidDetailStats(clanId, member, raidInfo);
      }, this.CONCURRENT_COUNT)
      //toArray()
    );
  }

  private getMemberRaidDetailStats(clanId: number, member: ClanMember, raidInfo: RaidInfo): Observable<MemberProfile> {
    //console.log(member);
    // return from(member.profile.data.characterIds).pipe(
    //   mergeMap((characterId: number) => {
    //     return this.getCharacterRaidStats(clanId, member, characterId);
    //   }),
    //   toArray(),
    //   map((characterStats) => {
    //     //        console.log(characterStats);
    //     return {
    //       memberProfile: { profile: member.profile },
    //       stats: this.combineCharacterActivityStats(characterStats)
    //     };
    //   })
    // );
    return forkJoin([
      this.memberMetricService.getSerializedProfile(
        clanId.toString(),
        member,
        raidInfo.trackedMetrics.map((x) => x.hash)
      )
    ]).pipe(
      map(([profileMetrics]) => {
        return {
          profile: profileMetrics.profile,
          metrics: profileMetrics.metrics
        };
      })
    );
  }

  // private getCharacterRaidStats(clanId: number, memberProfile: MemberProfile, characterId: number) {
  //   return this.memberMetricService.getSerializedProfile(clanId.toString(), memberProfile, this.TRACKED_STATS);
  // }

  // private combineCharacterActivityStats(stats) {
  //   const statsObj = {};
  //   AllRaids.forEach((x) => {
  //     statsObj[x.key] = this.combineStatValues(stats, x.hashes);
  //   });
  //   return statsObj;
  // }
  // private combineStatValues(stats, activityHashes) {
  //   const statValues = {};

  //   this.TRACKED_STATS.forEach((x) => {
  //     const combinedValues = stats.reduce((prevCharact, character) => {
  //       //       console.log('prevCharact', prevCharact);

  //       const characterCompletions = activityHashes.reduce((prevHash, curHash) => {
  //         // console.log('prev', prevHash);
  //         // console.log('cur', curHash);

  //         const activityCompletion = character.find((activity) => activity.activityHash === curHash)?.values?.[x]?.basic
  //           ?.value;
  //         // console.log(character.find((activity) => activity.activityHash === curHash)?.values?.[x]?.basic
  //         //   ?.value);

  //         //console.log('-----------------------');
  //         // console.log(' prevHash', prevHash);
  //         //console.log('activityCompletion', activityCompletion ? activityCompletion : 0);
  //         // console.log('total', prevHash + (activityCompletion ? activityCompletion : 0));

  //         return prevHash + (activityCompletion ? activityCompletion : 0);
  //       }, 0);
  //       // console.log('prevCharact ', prevCharact);
  //       // console.log('parse ', parseInt(prevCharact, 10));
  //       // console.log('characterCompletions ', characterCompletions);
  //       // console.log('combo', parseInt(prevCharact, 10) + characterCompletions);

  //       return parseInt(prevCharact, 10) + characterCompletions;
  //     }, 0);
  //     //      console.log('combinedValues', combinedValues);

  //     statValues[x] = combinedValues;
  //   });

  //   return statValues;
  // }
}
