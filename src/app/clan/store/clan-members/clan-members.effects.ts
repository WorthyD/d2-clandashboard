import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of } from 'rxjs';

import * as clanMemberActions from './clan-members.actions';
import * as memberProfileActions from '../member-profiles/member-profiles.actions';
import { GroupV2Service } from 'bungie-api-angular';

import * as clanIdSelectors from '../clan-id/clan-id.selector';
import { ClanMember } from 'bungie-models';
import { initLoadMemberProfiles } from '../member-profiles/member-profiles.actions';

// import { ClanDatabase } from '../../../services/ClanDatabase';
// import { Updater } from '../../services/updater';

import {
  catchError,
  map,
  switchMap,
  take,
  distinctUntilChanged,
  first,
  filter,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';

import { ClanMembersService } from '@destiny/data';
import { loadMemberActivities } from '../member-activities/member-activities.actions';

@Injectable()
export class ClanMemberEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    //       private groupService: GroupV2Service,
    //        private parser: ClanParseService
    //    private clanDB: ClanDatabase,
    //   private updater: Updater,
    private clanMemberService: ClanMembersService
  ) {}

  loadMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clanMemberActions.loadClanMembers),
      switchMap(({ clanId }) => {
        return this.clanMemberService.getClanMembersSerialized(clanId).pipe(
          map((clanMembers) => {
            this.store.dispatch(initLoadMemberProfiles({ clanId, clanMembers }));
            return clanMemberActions.loadClanMembersSuccess({
              clanMembers
            });
          })
        );

        // return this.clanDB.getValues(clanId.toString()).ClanMembers.pipe(
        //   take(1),
        //   map((clanMembers) => {
        //     if (clanMembers.length > 0) {
        //       console.log('loading members');
        //       this.store.dispatch(loadMemberProfiles({ clanId, clanMembers }));
        //       return clanMemberActions.loadClanMembersSuccess({
        //         clanMembers
        //       });
        //     } else {
        //       return clanMemberActions.loadClanMembersEmpty();
        //     }
        //   })
        // );
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

  // updateMembers$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(clanMemberActions.loadClanMembers),
  //       tap(({ clanId }) => {
  //         this.updater.update('clanMembers', clanId);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  // syncMembers$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(clanMemberActions.loadClanMembersFromAPI),
  //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
  //       tap(([action, clanId]) => {
  //         const members: ClanMember[] = action.clanMembers;

  //         members.forEach((x) => {
  //           x.id = x.destinyUserInfo.membershipId;
  //         });

  //         this.clanDB.update(clanId.toString(), 'ClanMembers', members);
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
