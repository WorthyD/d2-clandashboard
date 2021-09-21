import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';

import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanDatabase, ProfileMilestonesService, ProfileService } from '../clan-db';

import { environment } from '../../../../../src/environments/environment';

export interface RosterMember {
  member: ClanMember;
  profile: MemberProfile;
}

@Injectable({
  providedIn: 'root'
})
export class ClanRosterService {
  readonly CONCURRENT_COUNT = 10;
  private profileService: ProfileService;
  constructor(private profileMilestonesService: ProfileMilestonesService, private clanDb: ClanDatabase) {
    this.profileService = new ProfileService(clanDb, environment.bungieAPI);
  }

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
