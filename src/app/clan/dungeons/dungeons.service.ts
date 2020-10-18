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
    tap(() => {
      console.log('loading');
    }),
    map((s) => {
      return combineLatest([this.clanId$, this.clanMembers$]).pipe(
        map(([clanId, clanMembers]) => {
          console.log('clanId', clanId);
          console.log('clanMembers', clanMembers);

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
      console.log('x');
    }),
    map((x) => {
      return x;
    })
  );

  stats$ = this.preloadedInfo$;
  dungeonStats = [];
  dungeonStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      console.log(id);
      return this.clanDunegonService.getClanDungeonStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          console.log('merging', members);
          this.dungeonStats = this.dungeonStats.concat(members);
          return members;
        }),
        toArray(),

        map((stats) => {
          //   console.log('done', stats);
          return 'stuff';
        })
      );
      //    return id;
    })
  );

  loadDungeonStats() {
    this.dungeonStats$.subscribe();
  }
}
