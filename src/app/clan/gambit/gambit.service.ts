import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ClanGambitService } from '@destiny/data';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, forkJoin, pipe } from 'rxjs';

@Injectable()
export class GambitService {
  constructor(private clanGambitService: ClanGambitService, private store: Store<any>) {}
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);

  isLoading = true;
  gambitStats = [];
  selectedMembers$ = new BehaviorSubject([]);

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );
  clanMemberNames$ = this.preloadedInfo$.pipe(
    map(([isMemberLoaded, id, clanMembers]) => {
      return clanMembers.map((x) => x.destinyUserInfo.displayName);
    })
  );
  gambitStats$ = combineLatest([this.preloadedInfo$, this.selectedMembers$]).pipe(
    switchMap(([[isMemberLoaded, id, clanMembers], selectedMembers]) => {
      this.isLoading = true;
      this.gambitStats = [];
      if (selectedMembers.length > 0) {
        clanMembers = clanMembers.filter((members) => {
          return selectedMembers.indexOf(members.destinyUserInfo.displayName) > -1;
        });
      }
      return this.clanGambitService.getClanGambitStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.gambitStats = this.gambitStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
        })
      );
    })
  );
  memberSearch(members) {
    this.selectedMembers$.next(members);
  }
  loadStats() {
    this.gambitStats$.subscribe();
  }
}
