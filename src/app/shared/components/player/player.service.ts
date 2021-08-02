import { Injectable } from '@angular/core';
import { Callout, ClanMemberSeasonPassProgression } from '@destiny/components';
import { DestinyEntitiesCharactersDestinyCharacterComponent } from 'bungie-api-angular';

import { MemberProfile, BungieInfo } from 'bungie-models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor() {}
  themeSource$: BehaviorSubject<string>;
  theme$: Observable<string>;

  memberIdSource$: BehaviorSubject<string>;
  memberId$: Observable<string>;
  memberProfile$: Observable<MemberProfile>;
  seasonPass$: Observable<ClanMemberSeasonPassProgression>;
  characters$: Observable<DestinyEntitiesCharactersDestinyCharacterComponent[]>;
  memberSnapShot$: Observable<Callout[]>;
  bungieInfo$: Observable<BungieInfo>;
  bungieInfoLoading$: Observable<boolean>;
  memberSealInfo$: Observable<any>;

  // getMemberId() {
  //   throw new Error('not implemented');
  // }
  getPlayerProfile(platformId: string, profileId: string): Observable<MemberProfile> {
    throw new Error('not implemented');
  }
  setMemberId(memberId) {
    throw new Error('not implemented');
  }
}
