import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api';
import { ClanMember, MemberProfile } from 'bungie-models';
import { ClanDatabase } from '../ClanDatabase';
import { map, take, switchMap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import { DBObject } from '../app-indexed-db';

import * as moment from 'moment';

@Injectable()
export class ProfileService {
  private tableName = 'MemberProfiles';
  private xp = moment().add(-1, 'hours');
  private profileComponents = [100, 104, 200, 202];

  constructor(private d2Service: Destiny2Service, private clanDb: ClanDatabase) {}

  private getProfiles(clanId: string, members: ClanMember[]) {}

  private getProfileId(member: ClanMember) {
    return `${member.destinyUserInfo.membershipType}-${member.destinyUserInfo.membershipId}`;
  }

  getProfile(clanId: string, member: ClanMember): Observable<MemberProfile> {
    return this.clanDb.getValues(clanId).MemberProfiles.pipe(
      map((c) => {
        if (c && c.length > 0) {
          return c.find((m) => m.id === this.getProfileId(member));
        }
        return undefined;
      }),
      switchMap((p: DBObject) => {
        // Check Cache
        if (p && p.createDate) {
          const cacheDate = moment(p.createDate);
          const lastStatusChange = moment.unix(member.lastOnlineStatusChange);
          if (cacheDate.isAfter(lastStatusChange)) {
            return of(p?.data);
          }
        }

        return this.d2Service
          .destiny2GetProfile(
            member.destinyUserInfo.membershipId,
            member.destinyUserInfo.membershipType,
            this.profileComponents
          )
          .pipe(
            map((memberProfileResponse) => {
              if (memberProfileResponse.Response) {
                this.clanDb.update(clanId, 'MemberProfiles', [
                  {
                    id: this.getProfileId(member),
                    createDate: new Date(),
                    data: memberProfileResponse.Response
                  }
                ]);

                return memberProfileResponse.Response;
              }
            })
          );
      })
    );
  }
}
