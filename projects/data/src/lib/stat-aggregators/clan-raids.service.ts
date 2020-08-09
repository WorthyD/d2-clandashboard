import { Injectable } from '@angular/core';
import { AllRaids } from '@destiny/models';

import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'bungie-api';

export interface MemberAggregateActivityStats {
  member: any;
  //  activityStats:
}

export interface RaidStats {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClanRaidsService {
  constructor() {}
}
