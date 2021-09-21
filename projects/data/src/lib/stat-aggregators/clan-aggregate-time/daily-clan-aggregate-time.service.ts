import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember, MemberActivityTime } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { nowPlusDays } from '../../utility/date-utils';
import { groupActivitiesByDate, groupActivityStatsByDate } from '../../utility/group-activity-by-date';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class DailyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(
    memberActivities: MemberActivityTime[],
    //startData: Date,
    activityMode: any
  ) {

    const x = this.filterDates(memberActivities, nowPlusDays(-60));
    //console.log('x', x);

    const activities = [...x.map((y) => y.activities)];
    //    console.log('activities', activities);
    const flatActivities = [].concat.apply([], activities);
    //   console.log('flatActivities', flatActivities);
    const summedActivities = groupActivityStatsByDate(flatActivities);
    //  console.log('summedActivities', summedActivities);
    return summedActivities;
  }
}
