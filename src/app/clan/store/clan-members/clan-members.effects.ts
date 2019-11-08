import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';

import * as clanMemberActions from './clan-members.actions';
import * as memberProfileActions from '../member-profiles/member-profiles.actions';
import { GroupV2Service } from 'bungie-api';

import { ClanParseService } from '../../../parser/parsers/clan-parse.service';

import { ClanDatabase } from '../../../services/ClanDatabase';
import { Updater } from '../../services/updater';

import {
    catchError,
    map,
    switchMap,
    take,
    distinctUntilChanged,
    first,
    filter
} from 'rxjs/operators';

@Injectable()
export class ClanMemberEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        //       private groupService: GroupV2Service,
        //        private parser: ClanParseService
        private clanDB: ClanDatabase,
        private updater: Updater
    ) {}

    loadMembers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(clanMemberActions.loadClanMembers),
            switchMap(({ clanId }) => {
                return this.clanDB
                    .getValues(clanId.toString())
                    .ClanMembers.pipe(
                        take(1),
                        map(clanMembers => {
                            return clanMemberActions.loadClanMembersSuccess({
                                clanMembers
                            });
                        })
                    );
                // return this.groupService
                //     .groupV2GetMembersOfGroup(1, clanId)
                //     .pipe(
                //         switchMap(result => [
                //             clanMemberActions.loadClanMembersSuccess({
                //                 //clanDetails: result.Response.detail
                //                 clanMembers: result.Response.results
                //             }),
                //             memberProfileActions.loadMemberProfiles({
                //                 clanMembers: result.Response.results
                //             })
                //         ]),
                //         catchError(error => {
                //             return of(
                //                 clanMemberActions.loadClanMemberFailure({
                //                     error
                //                 })
                //             );
                //             // return of(false);
                //         })
                //     );
            })
        )
    );
}
