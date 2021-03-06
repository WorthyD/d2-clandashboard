import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ProfileService } from '@destiny/data';

import * as memberProfileActions from './member-profiles.actions';

import { map, switchMap, mergeMap, toArray, bufferTime } from 'rxjs/operators';
import { addNotification, updateNotification, removeNotification } from '../notifications/notifications.actions';

@Injectable()
export class MemberProfileEffects {
  constructor(private actions$: Actions, private store: Store<any>, private profileService: ProfileService) {}

  loadProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberProfileActions.initLoadMemberProfiles),
      switchMap(({ clanId, clanMembers }) => {
        let progress = 0;
        this.store.dispatch(
          addNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: { progress } } })
        );

        return this.profileService.getSerializedProfiles(clanId.toString(), clanMembers).pipe(
          bufferTime(1000, undefined, 100),
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
