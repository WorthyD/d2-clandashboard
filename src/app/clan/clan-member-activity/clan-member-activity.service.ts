import { Injectable } from '@angular/core';
import {ClanState} from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';

import { getMemberProfileEntities } from '../store/member-profiles/member-profiles.selectors';

@Injectable()
export class ClanMemberActivityService {
  constructor(
    private store: Store<ClanState>,
  ) {}

  clanMemberProfiles$ = this.store.pipe(select(getMemberProfileEntities));
}
