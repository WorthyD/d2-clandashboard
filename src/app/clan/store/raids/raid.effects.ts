import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { ClanRaidsService } from '@destiny/data';

import { MemberProfile, SealMembers } from 'bungie-models';
import { getAllMembers } from '../clan-members/clan-members.selectors';

import { loadRaidFailure, loadRaidSuccess, loadRaids, loadRaidGroupSuccess } from './raid.actions';
import * as clanMemberActions from '../clan-members/clan-members.actions';
//import * as clanMemberSelectors from '../clan-members/clan-members.selectors';
import * as clanMemberProfileSelectors from '../member-profiles/member-profiles.selectors';

import * as clanIdSelectors from '../clan-id/clan-id.selector';

import {
  catchError,
  map,
  switchMap,
  distinctUntilChanged,
  first,
  filter,
  concatMap,
  tap,
  mergeMap,
  take,
  withLatestFrom,
  mergeAll,
  concatAll,
  mergeMapTo,
  toArray,
  combineAll,
  bufferTime
} from 'rxjs/operators';
import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';

@Injectable()
export class RaidEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private clanRaidsService: ClanRaidsService //    private profileMilestonesService: ProfileMilestonesService
  ) {}

  loadRaidStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRaids),
      withLatestFrom(
        this.store.select(clanIdSelectors.getClanIdState),
        this.store.select(clanMemberProfileSelectors.getAllMembers)
      ),
      switchMap(([action, clanId, clanMembers]) => {
        /// Temp
        return this.clanRaidsService.getClanRaidStatsAsync(clanId, clanMembers).pipe(
          bufferTime(500, undefined, 10),
          mergeMap((members) => {
            this.store.dispatch(loadRaidGroupSuccess({ raidStats: members }));
            return members;
          }),

          map((memberStats) => {
            return loadRaidSuccess();
          })
        );

        // return this.clanRaidsService.getClanRaidStats(clanId, clanMembers).pipe(
        //   map((memberStats) => {
        //     return loadRaidSuccess({ raidStats: memberStats });
        //   })
        // );
      })
    )
  );
}
