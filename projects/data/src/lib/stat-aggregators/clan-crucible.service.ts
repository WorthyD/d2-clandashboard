import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileService } from '../clan-db/profiles/profile.service';
import { ActivityHashes, RecordHashes } from '@destiny/models';
import { ProfileMilestonesService } from '../clan-db/profile-milestones/profile-milestones.service';
import { SingleComponentResponseOfDestinyProfileRecordsComponent } from 'bungie-api-angular';
import { getGloryPoints, getValorPoints, getValorResets } from '../member-profile/member-stats-crucible';

@Injectable({
  providedIn: 'root'
})
export class ClanCrucibleService {
  readonly CONCURRENT_COUNT = 10;

  constructor(private profileService: ProfileService, private profileMilestonesService: ProfileMilestonesService) {}

  getClanCrucibleStats(clanId: number, clanMemberProfiles: ClanMember[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberCrucibleStats(clanId, member);
      }, this.CONCURRENT_COUNT)
    );
  }

  getMemberCrucibleStats(clanId: number, member: ClanMember): Observable<ActivityStats> {
    return forkJoin([
      this.profileService.getProfile(clanId.toString(), member),
      this.profileMilestonesService.getSerializedProfile(clanId.toString(), member, [RecordHashes.ValorResetHash])
    ]).pipe(
      map(([profileResponse, memberResponse]) => {
        return {
          memberProfile: { profile: profileResponse.profile },
          stats: {
            valorPoints: getValorPoints(profileResponse),
            valorResets: getValorResets(memberResponse.profileRecords),
            gloryPoints: getGloryPoints(profileResponse)
          }
        };
      })
    );
  }
}
