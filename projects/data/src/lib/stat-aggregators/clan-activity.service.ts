import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../clan-db';

@Injectable({
  providedIn: 'root'
})
export class ClanActivityService {
  readonly CONCURRENT_COUNT = 10;
  constructor(private profileService: ProfileService, private memberActivityService: ClanMemberRecentActivityService) {}

  getClanActivityStats(clanId: number, clanMemberProfiles: MemberProfile[], activityMode: number = 0) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberActivityStats(clanId, member, activityMode);
      }, this.CONCURRENT_COUNT)
    );
  }

  private getMemberActivityStats(
    clanId: number,
    member: MemberProfile,
    activityMode: number = 0
  ): Observable<ActivityStats> {
    return this.memberActivityService.getSerializedProfileActivity(clanId, member, activityMode).pipe(
      map((memberActivityResponse) => {
        return {
          memberProfile: { profile: member.profile },
          stats: memberActivityResponse
        };
      })
    );
  }
}
