import { Injectable } from '@angular/core';

import { Destiny2Service } from 'bungie-api';
import { BaseClanService } from '../base-clan.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile } from 'bungie-models';
import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class ClanMemberActivityService extends BaseClanService {
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, 'MemberActivities');
  }
  private getMemberActivityId() {}

  private getMemberCharacterActivity(member: MemberProfile, characterId: number) {
    return of(false);
  }

  private getMemberCharacterActivitySerialized(clanId: number, member: MemberProfile, characterId: number) {
    return of(false);
  }
  private getMemberActivity(clanId: number, member: MemberProfile) {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
      })
    );
  }
  getMemberActivitiesSerialized(clanId: number, member: MemberProfile) {}
}
