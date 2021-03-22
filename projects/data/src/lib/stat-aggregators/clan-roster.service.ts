import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';

import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileMilestonesService, ProfileService } from '../clan-db';

export interface RosterMember {
  member: ClanMember;
  profile: MemberProfile;
}

@Injectable({
  providedIn: 'root'
})
export class ClanRosterService {
  readonly CONCURRENT_COUNT = 10;

  constructor(private profileService: ProfileService, private profileMilestonesService: ProfileMilestonesService) {}

  getClanRosterStats(clanId: number, clanMemberProfiles: ClanMember[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberRosterStats(clanId, member);
      }, this.CONCURRENT_COUNT)
    );
  }

  getMemberRosterStats(clanId: number, member: ClanMember): Observable<RosterMember> {
    return forkJoin([
      this.profileService.getSerializedProfile(clanId.toString(), member),
      this.profileMilestonesService.getSerializedProfile(clanId.toString(), member, [])
    ]).pipe(
      map(([profileResponse, recordsResponse]) => {
        return {
          member: member,
          profile: {
            ...profileResponse,
            profileRecords: recordsResponse.profileRecords
          }
        };
      })
    );
  }
}
