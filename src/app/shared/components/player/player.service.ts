import { Injectable } from '@angular/core';
import { ClanMemberSeasonPassProgression } from '@destiny/components';
import { DestinyEntitiesCharactersDestinyCharacterComponent } from 'bungie-api-angular';

import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor() {}
  // memberId: BehaviorSubject<string>;
  memberIdSource: BehaviorSubject<string>;
  memberId: Observable<string>;
  memberProfile: Observable<MemberProfile>;
  seasonPass$: Observable<ClanMemberSeasonPassProgression>;
  characters$: Observable<DestinyEntitiesCharactersDestinyCharacterComponent[]>;

  getMemberId() {
    throw new Error('not implemented');
  }
  getPlayerProfile(platformId: string, profileId: string): Observable<MemberProfile> {
    throw new Error('not implemented');
  }
  setMemberId(memberId) {
    throw new Error('not implemented');
  }
}
