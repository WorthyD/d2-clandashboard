import { Injectable } from '@angular/core';
import { ClanDungeonService } from '@destiny/data';
import { select, Store } from '@ngrx/store';
import * as clanMemberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import { combineLatest, forkJoin, pipe } from 'rxjs';

@Injectable()
export class DungeonsService {
  constructor(private clanDunegonService: ClanDungeonService, private store: Store<any>) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberProfileSelectors.getAllMembers);

  stats2$ = this.isMembersLoaded$.pipe(
    filter((f) => f === true),
    take(1),
    map((s) => {
      return combineLatest([this.clanId$, this.clanMembers$]).pipe(
        map(([clanId, clanMembers]) => {

          return clanId;
        })
      );
    })
    // ,
    // map(([clanId, clanMembers]) => {
    //   console.log('clanId', clanId);
    //   console.log('clanMembers', clanMembers);
    //   //return this.clanMembers$;
    //   return clanId;
    // })
  );

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    tap(() => {
    }),
    map((x) => {
      return x;
    })
  );

  stats$ = this.preloadedInfo$;
  isLoading = true;
  dungeonStats = [];
  dungeonStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      return this.clanDunegonService.getClanDungeonStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.dungeonStats = this.dungeonStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
        })
      );
    })
  );

  loadDungeonStats() {
    this.dungeonStats$.subscribe();
  }
}
