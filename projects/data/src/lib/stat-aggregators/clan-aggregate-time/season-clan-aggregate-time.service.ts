import { Injectable } from '@angular/core';
import { MemberActivityTime } from 'bungie-models';
import { nowPlusWeeks } from '../../utility/date-utils';
import { groupActivityStatsByMonth } from '../../utility/group-activity-by-month';
import { groupActivityStatsByWeek } from '../../utility/group-activity-by-week';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class SeasonClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(memberActivities: MemberActivityTime[], activityMode: any) {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth() - 18, 1);

    const x = this.filterDates(memberActivities, startDate);

    const activities = [...x.map((y) => [...y.activities])];
    const flatActivities = [].concat.apply([], activities);

    const summedActivities = groupActivityStatsByMonth(flatActivities);

    return summedActivities;
  }
}
