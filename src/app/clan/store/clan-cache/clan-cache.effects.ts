import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';

import * as clanCacheActions from './clan-cache.actions';
import * as clanIdSelectors from '../clan-id/clan-id.selector';

import { ClanDatabase } from '../../../services/ClanDatabase';
import {
    catchError,
    map,
    switchMap,
    tap,
    distinctUntilChanged,
    first,
    take,
    filter,
    withLatestFrom
} from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';

@Injectable()
export class ClanCacheEffects {
    constructor(
        private actions$: Actions,
        private clanDB: ClanDatabase,
        private store: Store<any>
    ) {}

    loadCache$ = createEffect(() =>
        this.actions$.pipe(
            ofType(clanCacheActions.initializeCache),
            switchMap(({ clanId }) => {
                return this.clanDB
                    .getValues(clanId.toString())
                    .CacheDetails.pipe(
                        take(1),
                        map(cacheDetails => {
                            return clanCacheActions.loadCache({
                                caches: cacheDetails
                            });
                        })
                    );
            })
        )
    );

    updateCache$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(clanCacheActions.updateCache),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([cache, clanId]) => {
                    console.log('about to update');
                    console.log(cache);
                    this.clanDB.update(clanId.toString(), 'CacheDetails', [
                        cache.cache
                    ]);
                })
            ),
        { dispatch: false }
    );
}
