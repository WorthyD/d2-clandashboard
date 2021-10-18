// import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api-angular';

import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'projects/bungie-models/src/lib/models/ServiceModels/destinyHistoricalStatsDestinyHistoricalStatsPeriodGroup';

// import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api-angular/lib/model/destinyHistoricalStatsDestinyHistoricalStatsPeriodGroup';

export function clanMemberActivitySerializer(
  activity: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
): DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {
  return {
    period: activity.period,
    activityDetails: {
      mode: activity.activityDetails.mode,
      modes: activity.activityDetails.modes
    },
    values: {
      activityDurationSeconds: activity?.values?.activityDurationSeconds,
      completed: activity?.values?.completed
    }
  };
}
