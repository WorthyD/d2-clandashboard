import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ProfileService } from '../clan-db/profiles/profile.service';
import { ActivityHashes, RecordHashes } from '@destiny/models';
import { ProfileMilestonesService } from '../clan-db/profile-milestones/profile-milestones.service';
import { SingleComponentResponseOfDestinyProfileRecordsComponent } from 'bungie-api-angular';

@Injectable({
  providedIn: 'root'
})
export class ClanGambitService {
  readonly CONCURRENT_COUNT = 10;

  constructor(private profileService: ProfileService, private profileMilestonesService: ProfileMilestonesService) {}

  getClanGambitStats(clanId: number, clanMemberProfiles: ClanMember[]) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberGambitStats(clanId, member);
      }, this.CONCURRENT_COUNT)
    );
  }

  private getMemberGambitStats(clanId: number, member: ClanMember): Observable<ActivityStats> {
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
      this.profileMilestonesService.getSerializedProfile(clanId.toString(), member, [RecordHashes.InfamyResetHash])
    ]).pipe(
      map(([profileResponse, memberResponse]) => {
        return {
          memberProfile: { profile: profileResponse.profile },
          stats: {
            infamyPoints: this.getInfamyPoints(profileResponse),
            infamyResets: this.getInfamyResets(memberResponse.profileRecords)
          }
        };
      })
    );
  }

  private getInfamyPoints(mp: MemberProfile) {
    return this.getPoints(mp, ActivityHashes.infamyRank);
  }

  private getPoints(mp: MemberProfile, hash) {
    const firstCharacterId = mp.profile.data.characterIds[0];
    if (mp.characterProgressions.data) {
      return mp.characterProgressions.data[firstCharacterId].progressions[hash].currentProgress;
    } else {
      return -1;
    }
  }

  private getInfamyResets(records: SingleComponentResponseOfDestinyProfileRecordsComponent) {
    return (
      records?.data?.records[RecordHashes.InfamyResetHash]?.objectives.find(
        (x) => x.objectiveHash === RecordHashes.InfamyReseHashObjective
      )?.progress || 0
    );
  }
}
