import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';

//import * as clanDetailActions from './clan-detail.actions';
import * as clanMemberActions from './clan-members.actions';
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
export class ClanMemberEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private groupService: GroupV2Service,
        private parser: ClanParseService
    ) {}

    loadMembers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(clanMemberActions.loadClanMembers),
            switchMap(({ clanId }) => {
                return this.groupService
                    .groupV2GetMembersOfGroup(1, clanId)
                    .pipe(
                        map(result => {
                            console.log(result.Response.results);
                            return clanMemberActions.loadClanMembersSuccess({
                                //clanDetails: result.Response.detail
                                clanMembers: result.response.results
                            });
                        }),
                        catchError(error => {
                            return of(
                                clanMemberActions.loadClanMemberFailure({
                                    error
                                })
                            );
                            // return of(false);
                        })
                    );
            })
        )
    );
}
