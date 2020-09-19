import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';
interface MemberActivityStat extends DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {}

export interface MemberActivityRecentStats {
  id: string;
  activities: MemberActivityStat[];
}
