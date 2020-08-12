import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { getIsMembersLoaded } from '../store/clan-members/clan-members.selectors';
import { ClanState } from '../store/clan-state.state';
import { filter, take } from 'rxjs/operators';
import { getRaidStatsLoading, getAllRaidStats } from '../store/raids/raid.selectors';
import { loadRaids } from '../store/raids/raid.actions';
import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';

@Injectable()
export class RaidsService {
  constructor(private store: Store<ClanState>, private actions$: Actions) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  raidStats$ = this.store.pipe(select(getAllRaidStats));
  raidStatsLoading$ = this.store.pipe(select(getRaidStatsLoading));

  loadRaidStats() {
    this.isMembersLoaded$
      .pipe(
        filter((f) => f === true),
        take(1)
      )
      .subscribe((x) => {
        this.store.dispatch(loadRaids());
      });
  }
}
