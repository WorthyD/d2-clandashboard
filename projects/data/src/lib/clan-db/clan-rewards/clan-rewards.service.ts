import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api';
import { ClanMember, MemberProfile } from 'bungie-models';
import { ClanDatabase } from '../ClanDatabase';
// import { map, take, catchError, mergeMap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import { BaseClanService } from '../base-clan.service';
import { map, take, catchError, mergeMap, switchMap } from 'rxjs/operators';
@Injectable()
export class ClanRewardsService extends BaseClanService {
  private rowId = 'ClanRewards';
  constructor(private d2Service: Destiny2Service, private clanDb: ClanDatabase) {
    super(clanDb, 'ClanDetails');
  }

  private getClanRewardsFromAPI(clanId: number) {
    return this.d2Service.destiny2GetClanWeeklyRewardState(clanId);
  }

  private getClanRewards(clanId: number) {
    return this.getDataFromCache(clanId.toString(), this.rowId).pipe(
      switchMap((cachedData) => {
        if (this.isCacheValid(cachedData, 10)) {
          return of(cachedData?.data);
        }

        return this.getClanRewardsFromAPI(clanId).pipe(
          map((clanRewards) => {
            if (clanRewards.Response) {
              this.updateDB(clanId, this.rowId, clanRewards.Response);
              return clanRewards.Response;
            }
          }),
          catchError((error) => {
            if (cachedData && cachedData.data) {
              return of(cachedData.data);
            }
            throw error;
          })
        );
      })
    );
  }

  getClanRewardsSerialized(clanId: number) {
    return this.getClanRewards(clanId);
  }
}
