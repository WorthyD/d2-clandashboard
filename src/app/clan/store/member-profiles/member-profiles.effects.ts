import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from, forkJoin, BehaviorSubject } from 'rxjs';

// import * as clanDetailActions from './clan-detail.actions';
// import * as clanMemberActions from './clan-members.actions';

// import { ClanDatabase } from '../../../services/ClanDatabase';
// import { Updater } from '../../services/updater';
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
  combineAll,
  bufferTime
} from 'rxjs/operators';
import { addNotification, updateNotification, removeNotification } from '../notifications/notifications.actions';

@Injectable()
export class MemberProfileEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    // private d2Service: Destiny2Service,
    // private parser: ClanParseService,
    private profileService: ProfileService
  ) {}

  // loadMemberProfiles$ = createEffect(() =>

  loadProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberProfileActions.initLoadMemberProfiles),
      switchMap(({ clanId, clanMembers }) => {
        // clanMembers = clanMembers.slice(0, 10);
        let progress = 0;
        this.store.dispatch(
          addNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: { progress } } })
        );

        return this.profileService.getSerializedProfiles(clanId.toString(), clanMembers).pipe(
          // tap((x) => {
          //   this.store.dispatch(memberProfileActions.loadMemberProfile({ memberProfile: x }));
          // }),
          bufferTime(500, undefined, 20),
          /**
           * Don't continue processing if the timer in `bufferTime` was reached and
           *   there are no buffered companies.
           */
          mergeMap((members) => {
            progress += members.length;
            this.store.dispatch(
              updateNotification({
                notification: { id: 'memberProfile', title: 'Updating Profiles', data: { progress } }
              })
            );
            this.store.dispatch(memberProfileActions.loadMemberProfiles({ memberProfiles: members }));
            return members;
          }),
          toArray(),
          map((x) => {
            this.store.dispatch(
              removeNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: 'done' } })
            );
            return memberProfileActions.loadMemberProfileSuccess();
          })
        );
      })
    )
  );
}
