import { Injectable } from '@angular/core';

import { MemberProfile } from 'bungie-models';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor() {}
  memberId: Subject<string>;
//  memberId: Observable<string>;

  getMemberId() {
    throw new Error('not implemented');
  }
  getPlayerProfile(platformId: string, profileId: string): Observable<MemberProfile> {
    throw new Error('not implemented');
  }
}
