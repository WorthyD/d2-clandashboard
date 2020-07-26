import { MemberActivityStat } from 'bungie-models';
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';
import * as _ from 'lodash';

//DestinyHistoricalStatsDestinyActivityHistoryResults

export function clanMemberActivitySerializer(
  activity: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
): DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {
  return {
    period: activity.period,
    activityDetails: activity.activityDetails,
    values: {
      activityDurationSeconds: _.get(activity, 'values.activityDurationSeconds'),
      completed: _.get(activity, 'values.completed')
    }
  };
}
