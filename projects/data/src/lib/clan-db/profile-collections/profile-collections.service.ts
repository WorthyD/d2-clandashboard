import { Injectable } from '@angular/core';
import { BaseClanService } from '../base-clan.service';
import { BaseProfileService } from '../base-profile.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api-angular';
import { ClanMember, MemberProfile } from 'bungie-models';
import { Observable, from } from 'rxjs';
import { mergeMap, map, toArray } from 'rxjs/operators';
import { profileCollectionsSerializer } from './profile-collections.serializer';
import { StoreId } from '../app-indexed-db';

export interface MilestoneProfiles {
  milestoneHash: number;
  profiles: MemberProfile[];
}

@Injectable()
export class ProfileCollectionsService extends BaseProfileService {
  private concurrentRequests = 20;

  constructor(private clanDb: ClanDatabase, private d2Service: Destiny2Service) {
    super(clanDb, StoreId.ProfileMilestones, d2Service, [100, 800]);
  }

  getSerializedProfiles(
    clanId: string,
    members: ClanMember[],
    itemHashes: number[] = []
  ): Observable<MemberProfile> {
    return from(members).pipe(
      mergeMap((member) => this.getSerializedProfile(clanId, member, itemHashes), this.concurrentRequests)
    );
  }

  getSerializedProfile(clanId: string, member: ClanMember, itemHashes: number[] = []): Observable<MemberProfile> {
    return this.getProfile(clanId, member).pipe(
      map((profile) => {
        return (profileCollectionsSerializer(profile, itemHashes) as unknown) as MemberProfile;
      })
    );
  }

  getSerializedProfilesByHash(
    clanId: string,
    members: ClanMember[],
    itemHashes: number[] = []
  ): Observable<MilestoneProfiles[]> {
    return from(members).pipe(
      mergeMap((member) => this.getSerializedProfile(clanId, member, itemHashes), this.concurrentRequests),
      toArray(),
      map((serializedMembers) => {
        const groupedMilestones = itemHashes.map((x) => {
          return {
            milestoneHash: x,
            profiles: serializedMembers.map((profile) => profileCollectionsSerializer(profile, [x]))
          };
        });

        return groupedMilestones;
      })
    );
  }
}
// "2460356851": {
//   "state": 67,
//   "objectives": [
//       {
//           "objectiveHash": 1899840878,
//           "progress": 28,
//           "completionValue": 28,
//           "complete": true,
//           "visible": true
//       }
//   ],
//   "intervalsRedeemedCount": 0
// },
// "4239091332": {
//   "state": 4,
//   "objectives": [
//       {
//           "objectiveHash": 2661090795,
//           "progress": 12,
//           "completionValue": 28,
//           "complete": false,
//           "visible": true
//       }
//   ],
//   "intervalsRedeemedCount": 0
// }
