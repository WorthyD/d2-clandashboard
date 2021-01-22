import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../../clan-db';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class DailyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(clanId: number, clanMemberProfiles: MemberProfile[], activityMode: any, count: any) {
    return this.getClanActivityStats(clanId, clanMemberProfiles, activityMode).pipe(
      toArray(),
      map((x) => {
        console.log(x.map((y) => [...y.stats.activities]).length);
        const activities = [...x.map((y) => y.stats.activities)];
        return activities;
      })
    );
  }
  // constructor(
  //   private profileServiceBase: ProfileService,
  //   private memberActivityServiceBase: ClanMemberRecentActivityService
  // ) {
  //   super(profileServiceBase, memberActivityServiceBase);
  // }
}
