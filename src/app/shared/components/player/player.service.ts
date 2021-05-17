import { Injectable } from '@angular/core';

import { MemberProfile } from 'bungie-models';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor() {}

  getMemberId(){
    throw new Error('not implemented');
  }
  getPlayerProfile(platformId: string, profileId: string): Observable<MemberProfile> {
    throw new Error('not implemented');
  }
}
