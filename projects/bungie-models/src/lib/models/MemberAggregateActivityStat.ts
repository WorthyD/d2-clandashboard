import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api-angular';

export interface MemberAggregateActivityStats {
  member: any;
  characterId: any;
  activityStats: DestinyHistoricalStatsDestinyAggregateActivityStats[];
}
