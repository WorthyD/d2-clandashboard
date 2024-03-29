import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api-angular';
import { ClanDatabase } from '../ClanDatabase';
import { from, of, Observable } from 'rxjs';
import { BaseClanService } from '../base-clan.service';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { StoreId } from '../app-indexed-db';
import { ClanMember, MemberProfile, MemberAggregateActivityStats } from 'bungie-models';
import { memberActivityStatSerializer } from './member-activity-stat.serializer';
import { DestinyHistoricalStatsDestinyAggregateActivityStats } from 'projects/bungie-models/src/lib/models/ServiceModels/destinyHistoricalStatsDestinyAggregateActivityStats';

@Injectable()
export class MemberActivityStatsService extends BaseClanService {
  constructor(private d2Service: Destiny2Service, private clanDb: ClanDatabase) {
    super(clanDb, StoreId.MemberActivityStats);
  }
  private getMemberActivityStatId(member: MemberProfile, characterId: number) {
    return `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}-${characterId}`;
  }
  private getMemberActivityStatsFromAPI(member: MemberProfile, characterId: number) {
    return this.d2Service.destiny2GetDestinyAggregateActivityStats(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType
    );
  }
  private getMemberActivityStats(clanId: number, member: MemberProfile, characterId: number) {
    const characterActivityStatId = this.getMemberActivityStatId(member, characterId);
    return from(this.getDataFromCache(clanId.toString(), characterActivityStatId)).pipe(
      mergeMap((cachedData) => {
        if (this.isCacheValid(cachedData, 0, new Date(member.profile.data.dateLastPlayed))) {
          return of(cachedData.data);
        }
        return this.getMemberActivityStatsFromAPI(member, characterId).pipe(
          map((activityStatResponse) => {
            if (activityStatResponse.Response) {
              this.updateDB(clanId, characterActivityStatId, activityStatResponse.Response);
              return activityStatResponse.Response;
            }
          }),
          catchError((error) => {
            if (cachedData && cachedData.data) {
              return of(cachedData.data);
            }
            if (error?.error?.ErrorStatus === 'DestinyAccountNotFound') {
              return of();
            }
            throw error;
          })
        );
      })
    );
  }

  getMemberCharacterActivityStatsSerializedGETALL(
    clanId: number,
    member: MemberProfile,
    characterId: number
  ): Observable<any[]> {
    return this.getMemberActivityStats(clanId, member, characterId).pipe(
      map((activityStats) => {
        return activityStats;
      })
    );
  }

  getMemberCharacterActivityStatsSerialized(
    clanId: number,
    member: MemberProfile,
    characterId: number,
    statHashes: number[],
    trackedStats: string[]
  ): Observable<any[]> {
    return this.getMemberActivityStats(clanId, member, characterId).pipe(
      map((activityStats : any) => {
        return memberActivityStatSerializer(activityStats.activities, statHashes, trackedStats);
      })
    );
  }
}
