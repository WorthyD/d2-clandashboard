import { BaseClanService } from './base-clan.service';
import { ClanDatabase } from './ClanDatabase';
import { StoreId } from './app-indexed-db';
import { Destiny2Service } from 'bungie-api';
import { ClanMember } from 'bungie-models';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

export class BaseProfileService extends BaseClanService {
  constructor(
    private clanDbPBase: ClanDatabase,
    private tableNamePBase: StoreId,
    private d2ServiceBase: Destiny2Service,
    private profileComponents: number[]
  ) {
    super(clanDbPBase, tableNamePBase);
  }

  private getProfileId(member: ClanMember) {
    return `${member.destinyUserInfo.membershipType}-${member.destinyUserInfo.membershipId}`;
  }

  private getProfileFromAPI(member: ClanMember) {
    return this.d2ServiceBase.destiny2GetProfile(
      member.destinyUserInfo.membershipId,
      member.destinyUserInfo.membershipType,
      this.profileComponents
    );
  }

  private getProfile(clanId: string, member: ClanMember): Observable<any> {
    return this.getDataFromCache(clanId, this.getProfileId(member)).pipe(
      mergeMap((cachedData) => {
        const lastActivity = moment.unix(member.lastOnlineStatusChange).toDate();
        if (this.isCacheValid(cachedData, 0, lastActivity)) {
          return of(cachedData.data);
        }

        return this.getProfileFromAPI(member).pipe(
          map((memberProfileResponse) => {
            if (memberProfileResponse.Response) {
              this.clanDbPBase.update(clanId, this.tableName, [
                {
                  id: this.getProfileId(member),
                  createDate: new Date(),
                  data: memberProfileResponse.Response
                }
              ]);

              return memberProfileResponse.Response;
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
}
