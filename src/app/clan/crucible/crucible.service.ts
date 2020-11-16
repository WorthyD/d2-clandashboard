import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ClanCrucibleService } from '@destiny/data';
import * as clanMemberProfileSelectors from '../store/member-profiles/member-profiles.selectors';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import { combineLatest, forkJoin, pipe } from 'rxjs';

@Injectable()
export class CrucibleService {
  constructor(private clanCrucibleService: ClanCrucibleService, private store: Store<any>) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);

  isLoading = true;
  crucibleStats = [];
  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  crucibleStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      return this.clanCrucibleService.getClanCrucibleStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.crucibleStats = this.crucibleStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
        })
      );
    })
  );

  loadStats() {
    this.crucibleStats$.subscribe();
  }
}
