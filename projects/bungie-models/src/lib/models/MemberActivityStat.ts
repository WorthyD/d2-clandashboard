import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api-angular';
export interface MemberActivityStat extends DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {}

export interface MemberActivityStats {
  id: string;
  activities: MemberActivityStat[];
}
