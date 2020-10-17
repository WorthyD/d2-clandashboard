import { MemberActivityStat } from 'bungie-models';
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';


export function clanMemberActivitySerializer(
  activity: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
): DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {
  return {
    period: activity.period,
    activityDetails: activity.activityDetails,
    values: {
      activityDurationSeconds: activity?.values?.activityDurationSeconds,
      completed: activity?.values?.completed
    }
  };
}
