import { Injectable } from '@angular/core';
import { BaseMemberActivityService } from '../base-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';
import { StoreId } from '../app-indexed-db';
import { Destiny2Service } from 'bungie-api';
import { from, of, Observable, defer, concat, EMPTY, forkJoin } from 'rxjs';
import { mergeMap, map, catchError, concatAll, mergeAll, toArray, mapTo } from 'rxjs/operators';
import { MemberActivityStats, MemberProfile, MemberActivityRecentStats } from 'bungie-models';
import { clanMemberRecentActivitySerializer } from './clan-member-recent-activity.serializer';
import { clanMemberActivitySerializer } from '../clan-member-activity/clan-member-activity.serializer';

@Injectable()
export class ClanMemberRecentActivityService extends BaseMemberActivityService {
  private concurrentRequests = 5;
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(
      clanDB,
      StoreId.MemberRecentActivities,
      d2Service,
      new Date(new Date().setDate(new Date().getDate() + ((2 + 7 - new Date().getDay()) % 7) - 189)),
      10
    );
  }
  getMemberCharacterActivitySerialized(clanId: number, member: MemberProfile, characterId: number) {
    return this.getMemberCharacterActivity(clanId, member, characterId).pipe(
      map((activity) => {
        return {
          activities: activity.map((a) => clanMemberActivitySerializer(a))
        };
      })
    );
  }
  getMemberActivity(clanId: number, member: MemberProfile): Observable<MemberActivityStats> {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
      }),
      map((x) => {
        return x.activities;
      }),
      toArray(),
      map((x) => {
        return {
          id: `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}`,
          activities: [].concat(...x)
        };
      })
    );
  }

  getSerializedProfilesActivity(clanId: number, members: MemberProfile[]) {
    const s = members.find((x) => x.characters.privacy === 0);
    return from(members).pipe(
      mergeMap((member) => this.getSerializedProfileActivity(clanId, member), this.concurrentRequests)
    );
  }
  getSerializedProfileActivity(clanId: number, member: MemberProfile): Observable<MemberActivityRecentStats> {
    return this.getMemberActivity(clanId, member).pipe(
      map((profileActivity) => {
        return clanMemberRecentActivitySerializer(profileActivity);
      })
    );
  }
}
