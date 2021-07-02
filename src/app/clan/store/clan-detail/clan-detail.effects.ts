import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as clanDetailActions from './clan-detail.actions';

import { map, switchMap } from 'rxjs/operators';
import { ClanDetailsService } from '@destiny/data';

@Injectable()
export class ClanDetailEffects {
  constructor(private actions$: Actions, private store: Store<any>, private clanDetailsService: ClanDetailsService) {}

  loadDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clanDetailActions.loadClan),
      switchMap(({ clanId }) => {
        return this.clanDetailsService.getClanDetailsSerialized(clanId).pipe(
          map((x) => {
            return clanDetailActions.loadClanSuccess({ clanDetails: x });
          })
        );
      })
    )
  );
}
