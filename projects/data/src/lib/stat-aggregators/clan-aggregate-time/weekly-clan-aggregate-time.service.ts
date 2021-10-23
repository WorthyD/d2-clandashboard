import { MemberActivityTime } from 'projects/bungie-models/src/lib/models/MemberActivityTime';
import { nowPlusWeeks } from '../../utility/date-utils';
import { groupActivityStatsByWeek } from '../../utility/group-activity-by-week';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

export class WeeklyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(memberActivities: MemberActivityTime[], activityMode: any) {
    const x = this.filterDates(memberActivities, nowPlusWeeks(-24));

    const activities = [...x.map((y) => [...y.activities])];
    const flatActivities = [].concat.apply([], activities);

    const summedActivities = groupActivityStatsByWeek(flatActivities);

    return summedActivities;
  }

  getClanActivityByPlayer(memberActivities: MemberActivityTime[], activityMode: any) {
    const x = this.filterDates(memberActivities, nowPlusWeeks(-24));

    const results = x.map((y) => {
      return {
        id: y.id,
        seconds: y.activities.reduce((prev, next) => prev + next.seconds, 0)
      };
    });

    return results;
  }
}
