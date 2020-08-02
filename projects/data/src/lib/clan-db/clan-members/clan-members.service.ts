import { Injectable } from '@angular/core';
import { Destiny2Service, GroupV2Service } from 'bungie-api';
import { DBObject, StoreId } from '../app-indexed-db';

import { map, take, catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { ClanDatabase } from '../ClanDatabase';
import { of, from } from 'rxjs';
import { BaseClanService } from '../base-clan.service';

@Injectable()
export class ClanMembersService extends BaseClanService {
  private rowId = 'ClanMembers';
  constructor(private groupService: GroupV2Service, private clanDb: ClanDatabase) {
    super(clanDb, StoreId.ClanDetails);
  }

  private getClanMembersFromAPI(clanId: number) {
    return this.groupService.groupV2GetMembersOfGroup(1, clanId);
  }

  private getClanMembers(clanId: number) {
    return from(this.getDataFromCache(clanId.toString(), this.rowId)).pipe(
      switchMap((cachedData) => {
        if (this.isCacheValid(cachedData, 10)) {
          return of(cachedData?.data);
        }

        return this.getClanMembersFromAPI(clanId).pipe(
          map((clanDetail) => {
            if (clanDetail.Response) {
              this.updateDB(clanId, this.rowId, clanDetail.Response.results);

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
