import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';
interface MemberActivityStat extends DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup {}

export interface MemberActivityRecentStats {
  id: string;
  activities: MemberActivityStat[];
  lastNinetyDays: number;
  lastMonth: number;
  lastWeek: number;
}
