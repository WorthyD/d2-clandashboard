import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ClanDatabase, ProfileService } from '@destiny/data';

import * as memberProfileActions from './member-profiles.actions';

import { map, switchMap, mergeMap, toArray, bufferTime, filter } from 'rxjs/operators';
import { addNotification, updateNotification, removeNotification } from '../notifications/notifications.actions';
import { ProfileWorkerService } from '../../../workers/profile-worker/profile-worker.service';
import { of } from 'rxjs';
import { Destiny2Service } from 'bungie-api-angular';

import { environment } from '../../../../../src/environments/environment';

@Injectable()
export class MemberProfileEffects {
  profileService: ProfileService;
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private profileWorkerService: ProfileWorkerService,
    private d2Service: Destiny2Service,
    private clanDb: ClanDatabase
  ) {
    this.profileService = new ProfileService(clanDb, environment.bungieAPI);
  }

  loadProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(memberProfileActions.initLoadMemberProfiles),
      switchMap(({ clanId, clanMembers }) => {
        this.store.dispatch(
          addNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: { progress: 0 } } })
        );
        const progress = (progressCount) => {
          this.store.dispatch(
            updateNotification({
              notification: {
                id: 'memberProfile',
                title: 'Updating Profiles',
                data: { progress: progressCount }
              }
            })
          );
        };
        this.profileWorkerService.loadProfiles(clanId.toString(), clanMembers, progress);
        return this.profileWorkerService.members.pipe(
          filter((x) => x.length > 0),
          map((x) => {
            this.store.dispatch(memberProfileActions.loadMemberProfiles({ memberProfiles: x }));
            this.store.dispatch(
              removeNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: 'done' } })
            );
            return memberProfileActions.loadMemberProfileSuccess();
          })
        );
      })
    );
  });
}
