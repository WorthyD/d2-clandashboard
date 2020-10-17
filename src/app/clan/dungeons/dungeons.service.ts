import { Injectable } from '@angular/core';
import { ClanDungeonService } from '@destiny/data';
import { select, Store } from '@ngrx/store';
import * as clanMemberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { filter, map, take } from 'rxjs/operators';

@Injectable()
export class DungeonsService {
  constructor(private service: ClanDungeonService, private store: Store<any>) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberProfileSelectors.getAllMembers);

  stats$ = this.isMembersLoaded$.pipe(
    filter((f) => f === true),
    take(1),
    map(() => {
      return 'done';
    })
  );

  loadDungeonStats() {}
}
