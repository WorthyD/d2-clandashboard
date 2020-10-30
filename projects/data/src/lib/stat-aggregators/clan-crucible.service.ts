import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile } from 'bungie-models';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileService } from '../clan-db/profiles/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ClanCrucibleService {
  readonly CONCURRENT_COUNT = 10;

  constructor(private profileService: ProfileService) {}

  getClanDungeonStats(clanId: number, clanMemberProfiles: MemberProfile[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberDungeonStats(clanId, member);
      }, this.CONCURRENT_COUNT)
    );
  }

  private getMemberDungeonStats(clanId: number, member: MemberProfile): Observable<ActivityStats> {
    //console.log(member);
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId: number) => {
        return this.getCharacterCrucibleStats(clanId, member, characterId);
      }),
      toArray(),
      map((characterStats) => {
        return {
          memberProfile: { profile: member.profile },
          stats: null //this.combineCharacterActivityStats(characterStats)
        };
      })
    );
  }
  private getCharacterCrucibleStats(clanId: number, memberProfile: MemberProfile, characterId: number) {
    return this.memberActivityService.getMemberCharacterActivityStatsSerialized(
      clanId,
      memberProfile,
      characterId,
      this.TACKED_ACTIVITIES,
      this.TRACKED_STATS
    );
  }
}
