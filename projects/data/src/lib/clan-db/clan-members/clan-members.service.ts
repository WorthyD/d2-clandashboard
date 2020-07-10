import { Injectable } from '@angular/core';
import { Destiny2Service, GroupV2Service } from 'bungie-api';
import { DBObject, StoreId } from '../app-indexed-db';

import { map, take, catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { ClanDatabase } from '../ClanDatabase';
import { of } from 'rxjs';

@Injectable()
export class ClanMembersService {
  private tableName: StoreId = 'ClanDetails';
  private rowId = 'ClanMembers';
  constructor(private groupService: GroupV2Service, private clanDb: ClanDatabase) {}

  private getClanMembersFromCache(clanId: string) {
    return this.clanDb.getValues(clanId).ClanDetails.pipe(
      map((clanDetails) => {
        if (clanDetails && clanDetails.length > 0) {
          return clanDetails.find((m) => m.id === this.rowId);
        }
        return undefined;
      }),
      take(1)
    );
  }
  private getClanMembersFromAPI(clanId: number) {
    return this.groupService.groupV2GetMembersOfGroup(1, clanId);
  }

  private getClanMembers(clanId: number) {
    return this.getClanMembersFromCache(clanId.toString()).pipe(
      switchMap((cachedData) => {
        if (cachedData && cachedData.createDate) {
          const cacheDate = moment(cachedData.createDate);
          const expireDate = moment().add(-10, 'minutes');
          if (cacheDate.isAfter(expireDate)) {
            return of(cachedData?.data);
          }
        }

        return this.getClanMembersFromAPI(clanId).pipe(
          map((clanDetail) => {
            if (clanDetail.Response) {
              this.clanDb.update(clanId.toString(), this.tableName, [
                {
                  id: this.rowId,
                  createDate: new Date(),
                  data: clanDetail.Response.results
                }
              ]);
              return clanDetail.Response.results;
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

  getClanMembersSerialized(clanId: number) {
    return this.getClanMembers(clanId).pipe(
      map((x) => {
        // TODO; Serialize
        return x;
      })
    );
  }
}
