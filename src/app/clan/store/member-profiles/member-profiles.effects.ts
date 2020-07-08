import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from, forkJoin, BehaviorSubject } from 'rxjs';

// import * as clanDetailActions from './clan-detail.actions';
// import * as clanMemberActions from './clan-members.actions';

// import { ClanDatabase } from '../../../services/ClanDatabase';
import { Updater } from '../../services/updater';
import { ProfileService } from '@destiny/data';

import { MemberProfile } from 'bungie-models';
import { getAllMembers } from '../clan-members/clan-members.selectors';

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
  withLatestFrom,
  mergeAll,
  concatAll,
  mergeMapTo,
  toArray,
  combineAll
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
    private updater: Updater,
    private profileService: ProfileService
  ) {}

  // loadMemberProfiles$ = createEffect(() =>

  loadProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberProfileActions.loadMemberProfiles),
      switchMap((action) => {
        // console.log('loading profile', action.clanMembers);

        const members = action.clanMembers.slice(0, 10);

        //const obs2 = of(action.clanMembers).pipe(
        const obs2 = this.profileService.getSerializedProfiles(action.clanId.toString(), members).pipe(
          // mergeMap(x => {
          //   console.log('merge map', x);
          //   return x;
          // }),
          tap((x) => {
            console.log('tapping', x);
          }),
           //toArray()
          // mergeMap((x) => {
          //   console.log(x);
          //   return x;
          // })
        );

        // const obs = this.profileService.getSerializedProfiles(action.clanId.toString(), action.clanMembers).pipe(
        //   // tap((x) => {
        //   //   console.log('map', x);
        //   //   //   // return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [x] });
        //   // }),
        //   mergeMap((x, i) => {
        //     console.log('merge map', x);
        //     return from(x);
        //   }, 10),
        //   mergeMap((x, i) => {
        //     console.log('second merge', x);
        //     return x;
        //   })

        // map((x) => {
        //   return x;
        // }),
        //mergeAll()
        //);
        //.pipe(
        //concatAll(),
        // map((x) => {
        //   return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [x] });
        // })
        // );
        const final = forobs2.pipe(
          map((x) => {
            console.log('final', x);
            return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [] });
          })
        );

        return final;
      })
    )
  );

  /*
    // toArray(),
          // map((x) => {
          //   console.log('fina', map);
          //   return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [] });
          // }),
          //finalize(() => console.log('final'))
          // switchMap((x) => {
          //   console.log('tap', x);
          //    //return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [x] });
          // }),
          //mergeAll((x) => x),
          // concatMap((x) => {
          //   console.log('done', x);
          //   // return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [x] });
          //   return memberProfileActions.loadMemberProfileSuccess({ memberProfiles: [x] });
          // })
  */

  // updateMembers$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(clanMemberActions.loadClanMembersFromAPI, clanMemberActions.loadClanMembersSuccess),
  //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
  //       tap(([action, clanId]) => {
  //         this.updater.update('memberProfiles', clanId);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  // syncMemberProfiles$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(memberProfileActions.loadMemberProfilesFromAPI),
  //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
  //       tap(([action, clanId]) => {
  //         const memberProfiles: MemberProfile[] = action.memberProfiles;

  //         if (memberProfiles) {
  //           memberProfiles.forEach((x) => {
  //             x.id = x.profile.data.userInfo.membershipId;
  //           });
  //           this.clanDB.update(clanId.toString(), 'MemberProfiles', memberProfiles);
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
