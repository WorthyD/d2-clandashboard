import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';
export interface MemberActivityStat extends DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {}

export interface MemberActivityStats {
  id: string;
  activities: MemberActivityStat[];
}
