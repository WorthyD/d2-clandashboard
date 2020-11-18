import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileService } from '../clan-db/profiles/profile.service';
import { ActivityHashes } from '@destiny/models';
import { ProfileMilestonesService } from '../clan-db/profile-milestones/profile-milestones.service';

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

  private getMemberCrucibleStats(clanId: number, member: ClanMember): Observable<ActivityStats> {
    //console.log(member);
    // return from(member.profile.data.characterIds).pipe(
    //   mergeMap((characterId: number) => {
    //     return this.getCharacterCrucibleStats(clanId, member, characterId);
    //   }),
    //   toArray(),
    //   map((characterStats) => {
    //     return {
    //       memberProfile: { profile: member.profile },
    //       stats: null //this.combineCharacterActivityStats(characterStats)
    //     };
    //   })
    // );

    return forkJoin([
      this.profileService.getProfile(clanId.toString(), member),
      this.profileMilestonesService.getSerializedProfile(clanId.toString(), member)
    ]).pipe(
      map(([profileResponse, memberResponse]) => {
        return {
          memberProfile: { profile: profileResponse.profile },
          stats: {
            valorPoints: this.getValorPoints(profileResponse),
            gloryPoints: this.getGloryPoints(profileResponse)
          }
        };
      })
    );
  }

  private getValorPoints(mp: MemberProfile) {
    return this.getPoints(mp, ActivityHashes.valorRank);
  }
  private getGloryPoints(mp: MemberProfile) {
    return this.getPoints(mp, ActivityHashes.gloryRank);
  }
  private getPoints(mp: MemberProfile, hash) {
    const firstCharacterId = mp.profile.data.characterIds[0];
    if (mp.characterProgressions.data) {
      return mp.characterProgressions.data[firstCharacterId].progressions[hash].currentProgress;
    } else {
      return -1;
    }
  }

  private getCharacterCrucibleStats(clanId: number, memberProfile: MemberProfile, characterId: number) {
    // return this.memberActivityService.getMemberCharacterActivityStatsSerialized(
    //   clanId,
    //   memberProfile,
    //   characterId,
    //   this.TACKED_ACTIVITIES,
    //   this.TRACKED_STATS
    // );
    //return this.profileService.getSerializedProfile();
  }
}
