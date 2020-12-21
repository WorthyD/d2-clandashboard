import { Injectable } from '@angular/core';

import { BaseProfileService } from '../base-profile.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api-angular';
import { ClanMember, MemberProfile } from 'bungie-models';
import { Observable, from } from 'rxjs';
import { mergeMap, map, toArray } from 'rxjs/operators';
import { memberMetricSerializer } from './member-metric.serializer';

import { StoreId } from '../app-indexed-db';

@Injectable()
export class MemberMetricsService extends BaseProfileService {
  private concurrentRequests = 20;
  constructor(private clanDb: ClanDatabase, private d2Service: Destiny2Service) {
    super(clanDb, StoreId.ProfileMetrics, d2Service, [100, 1100]);
  }

  getSerializedProfiles(
    clanId: string,
    members: ClanMember[],
    milestoneHashes: number[] = []
  ): Observable<MemberProfile> {
    return from(members).pipe(
      mergeMap((member) => this.getSerializedProfile(clanId, member, milestoneHashes), this.concurrentRequests)
    );
  }
  getSerializedProfile(clanId: string, member: ClanMember, milestoneHashes: number[] = []): Observable<MemberProfile> {
    return this.getProfile(clanId, member).pipe(
      map((profile) => {
        return (memberMetricSerializer(profile, milestoneHashes) as unknown) as MemberProfile;
      })
    );
  }
}
