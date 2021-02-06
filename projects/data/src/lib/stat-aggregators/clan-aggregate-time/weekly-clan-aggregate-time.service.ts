import { Injectable } from '@angular/core';
import { MemberActivityTime } from 'bungie-models';
import { nowPlusWeeks } from '../../utility/date-utils';
import { groupActivityStatsByWeek } from '../../utility/group-activity-by-week';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class WeeklyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(memberActivities: MemberActivityTime[], activityMode: any) {
    const x = this.filterDates(memberActivities, nowPlusWeeks(-12));

    const activities = [...x.map((y) => y.activities)];
    const flatActivities = [].concat.apply([], activities);

    const summedActivities = groupActivityStatsByWeek(flatActivities);

    return summedActivities;
  }
}
