import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileService } from '../clan-db/profiles/profile.service';
import { ActivityHashes } from '@destiny/models';

@Injectable({
  providedIn: 'root'
})
export class ClanCrucibleService {
  readonly CONCURRENT_COUNT = 10;

  constructor(private profileService: ProfileService) {}

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

    return this.profileService.getProfile(clanId.toString(), member).pipe(
      map((x) => {
        return {
          memberProfile: { profile: x.profile },
          stats: {
            valorPoints: this.getValorPoints(x)
          }
        };
      })
    );
  }

  private getValorPoints(mp: MemberProfile) {
    const firstCharacterId = mp.profile.data.characterIds[0];
    return mp.characterProgressions.data[firstCharacterId].progressions[ActivityHashes.valorRank].currentProgress;
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
