import { Injectable } from '@angular/core';

import { Destiny2Service } from 'bungie-api';
import { BaseClanService } from '../base-clan.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile } from 'bungie-models';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ClanMemberActivityService extends BaseClanService {
  private ACTIVITY_GET_COUNT = 100;
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, 'MemberActivities');
  }
  private getMemberActivityId(member: MemberProfile, characterId: number) {
    return `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}-${characterId}`;
  }

  private getMemberCharacterActivityFromAPI(member: MemberProfile, characterId: number) {
    return this.d2Service.destiny2GetActivityHistory(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType,
      this.ACTIVITY_GET_COUNT
    );
  }

  private getMemberCharacterActivity(clanId: number, member: MemberProfile, characterId: number) {
    const characterActivityId = this.getMemberActivityId(member, characterId);
    return this.getDataFromCache(clanId.toString(), characterActivityId).pipe(
      mergeMap((cachedData) => {
        if (this.isCacheValid(cachedData, 0, new Date(member.profile.data.dateLastPlayed))) {
          return of(cachedData.data);
        }

        return this.getMemberCharacterActivityFromAPI(member, characterId).pipe(
          map((activityResponse) => {
            if (activityResponse.Response) {
              this.updateDB(clanId, characterActivityId, activityResponse.Response);
              return activityResponse.Response;
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

  private getMemberCharacterActivitySerialized(clanId: number, member: MemberProfile, characterId: number) {
    return this.getMemberCharacterActivity(clanId, member, characterId).pipe(
      map((activity) => {
        return activity;
      })
    );
  }
  private getMemberActivity(clanId: number, member: MemberProfile) {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
      })
    );
  }
  getMemberActivitiesSerialized(clanId: number, member: MemberProfile) {}
}
