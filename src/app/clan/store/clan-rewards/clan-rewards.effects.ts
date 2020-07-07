import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';
import { take, withLatestFrom, delay } from 'rxjs/operators';

//import * as clanDetailActions from './clan-detail.actions';
import * as clanRewardActions from './clan-rewards.actions';
import * as clanIdSelectors from '../clan-id/clan-id.selector';
// import { GroupV2Service } from 'bungie-api';

// import { ClanParseService } from '../../../parser/parsers/clan-parse.service';

import { ClanDatabase } from '@destiny/data';
import { RewardsUpdater } from '../../services/clanRewardsUpdater';

import { catchError, map, switchMap, tap, distinctUntilChanged, first, filter } from 'rxjs/operators';

@Injectable()
export class ClanRewardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    //     private groupService: GroupV2Service,
    //      private parser: ClanParseService,
    private clanDB: ClanDatabase,
    private updater: RewardsUpdater
  ) {}

  loadRewards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clanRewardActions.loadRewards),
      delay(1000),
      switchMap(({ clanId }) => {
        return this.clanDB.getValues(clanId.toString()).ClanRewards.pipe(
          take(1),
          map((clanRewards) => {
            if (clanRewards[0] && clanRewards[0]) {
              return clanRewardActions.loadRewardsSuccess({
                clanReward: clanRewards[0].clanRewards
              });
            } else {
              return clanRewardActions.loadRewardsSuccess({
                clanReward: {}
              });
            }
          })
        );
      })
    )
  );

  updateDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(clanRewardActions.loadRewards),
        tap(({ clanId }) => {
          this.updater.update('clanRewards', clanId);
        })
      ),
    { dispatch: false }
  );

  syncDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clanRewardActions.loadRewardsFromAPI),
      withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
      switchMap(([action, clanId]) => {
        this.clanDB.update(clanId.toString(), 'ClanRewards', [
          {
            id: clanId,
            clanRewards: action.clanReward
          }
        ]);
        return [
          clanRewardActions.loadRewardsSuccess({
            clanReward: action.clanReward
          })
        ];
      })
    )
  );
}
