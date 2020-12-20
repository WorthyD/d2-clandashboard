import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { getIsMembersLoaded } from '../store/clan-members/clan-members.selectors';
import { ClanState } from '../store/clan-state.state';
//import { combineLatest, filter, take } from 'rxjs/operators';
import { getRaidStatsLoading, getAllRaidStats } from '../store/raids/raid.selectors';
import { loadRaids } from '../store/raids/raid.actions';
//import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { AllRaidInfos } from '@destiny/models';
import * as clanMemberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import { combineLatest, forkJoin, pipe } from 'rxjs';
import { ClanRaidsService } from '@destiny/data';

@Injectable()
export class RaidsService {
  constructor(private store: Store<ClanState>, private actions$: Actions, private clanRaidsService: ClanRaidsService) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  //  raidStats$ = this.store.pipe(select(getAllRaidStats));
  // raidStatsLoading$ = this.store.pipe(select(getRaidStatsLoading));
  allRaidInfo = AllRaidInfos;

  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberProfileSelectors.getAllMembers);

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  stats$ = this.preloadedInfo$;
  isLoading = true;
  isLoaded = false;
  raidStats = [];
  raidStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      this.raidStats = [];
      return this.clanRaidsService.getClanRaidStatsAsync(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.raidStats = this.raidStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
          this.isLoaded = true;
        })
      );
    })
  );

  loadRaidStats() {
    if (this.isLoaded === false) {
      this.raidStats$.subscribe();
    }

    // this.isMembersLoaded$
    //   .pipe(
    //     filter((f) => f === true),
    //     take(1)
    //   )
    //   .subscribe((x) => {
    //     this.store.dispatch(loadRaids());
    //   });
  }
}
