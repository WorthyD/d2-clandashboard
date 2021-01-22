import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../../clan-db';
import { groupActivitiesByDate } from '../../utility/group-activity-by-date';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class DailyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(
    clanId: number,
    clanMemberProfiles: MemberProfile[],
    startData: Date,
    activityMode: any,
  ) {
    return this.getClanActivityStats(clanId, clanMemberProfiles, startData, activityMode).pipe(
      toArray(),
      map((x) => {
        const activities = [...x.map((y) => y.stats.activities)];
        const flatActivities = [].concat.apply([], activities);
        const summedActivities = groupActivitiesByDate(flatActivities);

        return summedActivities;
      })
    );
  }
}
