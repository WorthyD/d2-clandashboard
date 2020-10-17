import { Injectable } from '@angular/core';
import { ClanDungeonService } from '@destiny/data';
import { Store } from '@ngrx/store';
import * as clanMemberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as clanIdSelectors from '../store/clan-id/clan-id.selector';


@Injectable()
export class DungeonsService {
  constructor(private service: ClanDungeonService, private store: Store<any>) {}

clanId$=  this.store.select(clanIdSelectors.getClanIdState),
clanMembers$=        this.store.select(clanMemberProfileSelectors.getAllMembers)

  loadDungeonStats() {}
}
