import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api';
import { ClanMember, MemberProfile } from 'bungie-models';
import { ClanDatabase } from '../ClanDatabase';
import { map, take, catchError, mergeMap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';

import { DBObject, StoreId } from '../app-indexed-db';

import * as moment from 'moment';

import { profileSerializer } from './profile.serializer';
import { ContentHashService } from '../../services/content-hash.service';

@Injectable()
export class ProfileService {
  private tableName: StoreId = 'MemberProfiles';
  private concurrentRequests = 10;
  private profileComponents = [100, 104, 200, 202];

  private getProfileId(member: ClanMember) {
    return `${member.destinyUserInfo.membershipType}-${member.destinyUserInfo.membershipId}`;
  }

  private getProfileFromCache(clanId: string, member: ClanMember) {
    return this.clanDb.getValues(clanId).MemberProfiles.pipe(
      map((c) => {
        if (c && c.length > 0) {
          return c.find((m) => m.id === this.getProfileId(member));
        }
        return undefined;
      }),
      take(1)
    );
  }

  private getProfileFromAPI(member: ClanMember) {
    return this.d2Service.destiny2GetProfile(
      member.destinyUserInfo.membershipId,
      member.destinyUserInfo.membershipType,
      this.profileComponents
    );
  }

  private getProfile(clanId: string, member: ClanMember): Observable<any> {
    return this.getProfileFromCache(clanId, member).pipe(
      mergeMap((cachedData) => {
        if (cachedData && cachedData.createDate) {
          const cacheDate = moment(cachedData.createDate);
          const lastStatusChange = moment.unix(member.lastOnlineStatusChange);
          if (cacheDate.isAfter(lastStatusChange)) {
            return of(cachedData?.data);
          }
        }
        return this.getProfileFromAPI(member).pipe(
          map((memberProfileResponse) => {
            if (memberProfileResponse.Response) {
              this.clanDb.update(clanId, this.tableName, [
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

  constructor(
    private d2Service: Destiny2Service,
    private clanDb: ClanDatabase,
    private contentHashService: ContentHashService
  ) {}

  getSerializedProfiles(clanId: string, members: ClanMember[]): Observable<MemberProfile> {
    return from(members).pipe(mergeMap((member) => this.getSerializedProfile(clanId, member), this.concurrentRequests));
  }

  getSerializedProfile(clanId: string, member: ClanMember): Observable<MemberProfile> {
    return this.getProfile(clanId, member).pipe(
      map((profile) => {
        return (profileSerializer(profile, this.contentHashService.getProfileHashes()) as unknown) as MemberProfile;
      })
    );
  }
}