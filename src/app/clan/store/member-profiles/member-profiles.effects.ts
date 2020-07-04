import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from } from 'rxjs';

//import * as clanDetailActions from './clan-detail.actions';
// import * as clanMemberActions from './clan-members.actions';

// import { ClanDatabase } from '../../../services/ClanDatabase';
import { Updater } from '../../services/updater';

import { MemberProfile } from 'bungie-models';

import * as memberProfileActions from './member-profiles.actions';
import * as clanMemberActions from '../clan-members/clan-members.actions';

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
    withLatestFrom
} from 'rxjs/operators';
import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';

@Injectable()
export class MemberProfileEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        // private d2Service: Destiny2Service,
        // private parser: ClanParseService,
        private clanDB: ClanDatabase,
        private updater: Updater
    ) {}

    // loadMemberProfiles$ = createEffect(() =>

    loadProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(memberProfileActions.loadMemberProfiles),
            switchMap(({ clanId }) => {
                return this.clanDB
                    .getValues(clanId.toString())
                    .MemberProfiles.pipe(
                        take(1),
                        map(memberProfiles => {
                            if (memberProfiles.length > 0) {
                                this.updater.update('memberProfiles', clanId);

                                return memberProfileActions.loadMemberProfileSuccess(
                                    { memberProfiles }
                                );
                            } else {
                                return memberProfileActions.loadMemberProfilesEmpty();
                            }
                        })
                    );
            })
        )
    );

    updateMembers$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(clanMemberActions.loadClanMembersFromAPI, clanMemberActions.loadClanMembersSuccess),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([action, clanId]) => {
                    this.updater.update('memberProfiles', clanId);
                })
            ),
        { dispatch: false }
    );

    syncMemberProfiles$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(memberProfileActions.loadMemberProfilesFromAPI),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([action, clanId]) => {
                    const memberProfiles: MemberProfile[] =
                        action.memberProfiles;

                    if (memberProfiles) {
                        memberProfiles.forEach(x => {
                            x.id = x.profile.data.userInfo.membershipId;
                        });
                        this.clanDB.update(
                            clanId.toString(),
                            'MemberProfiles',
                            memberProfiles
                        );
                    }
                })
            ),
        { dispatch: false }
    );
}
