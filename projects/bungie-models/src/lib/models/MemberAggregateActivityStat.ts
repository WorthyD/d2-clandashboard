import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api';

export interface MemberAggregateActivityStats {
  member: any;
  characterId: any;
  activityStats: DestinyHistoricalStatsDestinyAggregateActivityStats[];
}
