import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

import * as clanDetailActions from './clan-detail.actions';
import * as clanIdSelectors from '../clan-id/clan-id.selector';
// import { GroupV2Service } from 'bungie-api';

// import { ClanParseService } from '../../../parser/parsers/clan-parse.service';

import { ClanDatabase } from '../../../services/ClanDatabase';
import { Updater } from '../../services/updater';

import {
    catchError,
    map,
    switchMap,
    tap,
    distinctUntilChanged,
    first,
    filter
} from 'rxjs/operators';

@Injectable()
export class ClanDetailEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        //     private groupService: GroupV2Service,
        //      private parser: ClanParseService,
        private clanDB: ClanDatabase,
        private updater: Updater
    ) {}

    loadDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(clanDetailActions.loadClan),
            switchMap(({ clanId }) => {
                return this.clanDB
                    .getValues(clanId.toString())
                    .ClanDetails.pipe(
                        take(1),
                        map(clanDetails => {
                            if (clanDetails[0] && clanDetails[0].clanDetails) {
                                return clanDetailActions.loadClanSuccess({
                                    clanDetails: clanDetails[0].clanDetails
                                });
                            } else {
                                return clanDetailActions.loadClanSuccess({
                                    clanDetails: {}
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
                ofType(clanDetailActions.loadClan),
                tap(({ clanId }) => {
                    this.updater.update('clanDetails', clanId);
                })
            ),
        { dispatch: false }
    );

    syncDetails$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(clanDetailActions.updateClanFromAPI),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([action, clanId]) => {
                    console.log('updating from api');
                    this.clanDB.update(clanId.toString(), 'ClanDetails', [
                        {
                            id: action.clanDetails.groupId,
                            clanDetails: action.clanDetails
                        }
                    ]);
                })
            ),

        { dispatch: false }
    );

    // loadFromAPI$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(clanDetailActions.loadClanFromAPI),
    //         switchMap(({ clanId }) => {
    //             return this.groupService.groupV2GetGroup(clanId).pipe(
    //                 map(result => {
    //                     return clanDetailActions.loadClanFromAPISuccess({
    //                         clanDetails: result.Response.detail
    //                     });
    //                 }),
    //                 catchError(error => {
    //                     return of(
    //                         clanDetailActions.loadClanFromAPIFailure({ error })
    //                     );
    //                     //         // return of(false);
    //                 })
    //             );
    //         })
    //     )
    // );
}
