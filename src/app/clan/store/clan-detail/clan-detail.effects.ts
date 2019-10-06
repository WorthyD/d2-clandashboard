import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';

import * as clanDetailActions from './clan-detail.actions';
import { GroupV2Service } from 'bungie-api';

import { ClanParseService } from '../../../parser/parsers/clan-parse.service';

import {
    catchError,
    map,
    switchMap,
    distinctUntilChanged,
    first,
    filter
} from 'rxjs/operators';

@Injectable()
export class ClanDetailEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private groupService: GroupV2Service,
        private parser: ClanParseService
    ) {}

    loadDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(clanDetailActions.loadClan),
            switchMap(({ clanId }) => {
                return this.groupService.groupV2GetGroup(clanId).pipe(
                    map(result => {
                        const clanDetails = this.parser.parseClan(
                            result.Response.detail
                        );
                        return clanDetailActions.loadClanSuccess({
                            clanDetails
                        });
                    }),
                    catchError(error => {
                        return of(clanDetailActions.loadClanFailure({ error }));
                        // return of(false);
                    })
                );
            })
        )
    );
}
