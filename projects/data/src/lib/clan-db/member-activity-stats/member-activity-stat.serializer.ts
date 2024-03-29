import { MemberProfile } from 'bungie-models';
import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api-angular';

export function memberActivityStatSerializer(
  records: DestinyHistoricalStatsDestinyAggregateActivityStats[],
  recordHashes: number[],
  trackedStats: string[]
): DestinyHistoricalStatsDestinyAggregateActivityStats[] {
  const activities = [];

  if (records) {
    recordHashes.forEach((recordHash) => {
      const record = records.find((x) => x.activityHash === recordHash);
      if (record) {
        const recordValues = {};
        trackedStats.forEach((stat) => {
          recordValues[stat] = record.values[stat];
        });
        activities.push({
          activityHash: record.activityHash,
          values: recordValues
        });
      }
    });
  }

  return activities;
}
