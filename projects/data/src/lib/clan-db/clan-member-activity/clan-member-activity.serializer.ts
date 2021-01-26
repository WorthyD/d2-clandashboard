import { MemberActivityStat } from 'bungie-models';
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api-angular';

export function clanMemberActivitySerializer(
  activity: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
): DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {
  return {
    period: activity.period,
    activityDetails: {
      mode: activity.activityDetails.mode
      //modes: activity.activityDetails.modes
    },
    values: {
      activityDurationSeconds: activity?.values?.activityDurationSeconds,
      completed: activity?.values?.completed
    }
  };
}
