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
import { BehaviorSubject, combineLatest, forkJoin, pipe } from 'rxjs';
import { ClanRaidsService, ClanRaidDetailsService } from '@destiny/data';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';

@Injectable()
export class RaidsService {
  constructor(
    private store: Store<ClanState>,
    private actions$: Actions,
    private clanRaidsService: ClanRaidsService,
    private clanRaidDetailsService: ClanRaidDetailsService
  ) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  allRaidInfo = AllRaidInfos;

  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);
  clanMemberProfiles$ = this.store.select(clanMemberProfileSelectors.getAllMembers);
  selectedRaid$ = new BehaviorSubject('');

  preloadedInfo$ = combineLatest([
    this.isMembersLoaded$,
    this.clanId$,
    this.clanMemberProfiles$,
    this.clanMembers$
  ]).pipe(
    filter(([isMembersLoaded, id, m, cm]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  stats$ = this.preloadedInfo$;
  isLoading = true;
  isLoaded = false;
  raidStats = [];
  raidStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMemberProfiles, cm]) => {
      this.isLoading = true;
      this.raidStats = [];
      return this.clanRaidsService.getClanRaidStatsAsync(id, clanMemberProfiles).pipe(
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

  isDetailsLoading = true;
  raidDetailInfo;
  raidDetailStats = [];
  raidDetailStats$ = combineLatest([this.preloadedInfo$, this.selectedRaid$]).pipe(
    switchMap(([[isMemberLoaded, id, clanMemberProfiles, clanMembers], selectedRaid]) => {
      if (!selectedRaid) {
        return;
      }

      this.isDetailsLoading = true;
      this.raidDetailStats = [];

      this.raidDetailInfo = AllRaidInfos.find((x) => x.raid.key.toLowerCase() === selectedRaid.toLowerCase());

      return this.clanRaidDetailsService.getClanRaidDetailStats(id, clanMembers, this.raidDetailInfo).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.raidDetailStats = this.raidDetailStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isDetailsLoading = false;
        })
      );
    })
  );

  loadRaidStats() {
    if (this.isLoaded === false) {
      this.raidStats$.subscribe();
    }
  }
  changeRaidDetails(key) {
    this.selectedRaid$.next(key);
  }
}
