import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as memberActivityActions from './member-activities-all.actions';

import * as clanIdSelectors from '../clan-id/clan-id.selector';

import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { loadMemberProfileSuccess } from '../member-profiles/member-profiles.actions';
import { getAllMembers } from '../member-profiles/member-profiles.selectors';
import { nowPlusMinutes } from 'projects/data/src/lib/utility/date-utils';
import { addNotification, removeNotification, updateNotification } from '../notifications/notifications.actions';
import { ProfileActivityWorkerService } from 'src/app/workers/profile-activity/profile-activity.service';
import { refreshMemberActivitiesComplete } from '../member-activities/member-activities.actions';

@Injectable()
export class MemberActivityAllEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private memberActivityService: ProfileActivityWorkerService
  ) {}

  memberActivitiesUpated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(refreshMemberActivitiesComplete),
      map(() => {
        return memberActivityActions.loadMemberAllActivities();
      })
    );
  });

  loadMemberActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberActivityActions.loadMemberAllActivities),
      withLatestFrom(this.store.select(clanIdSelectors.getClanIdState), this.store.select(getAllMembers)),
      map(([action, clanId, members]) => {
        const lastUpdate = new Date(window.localStorage.getItem('lastActivityAllUpdate-' + clanId));
        const refreshThreshold = nowPlusMinutes(-60);

        // Updating is expensive. Limit it to 1 time an hour.
        if (refreshThreshold > lastUpdate) {
          return memberActivityActions.refreshMemberAllActivities({ member: members });
        }

        return memberActivityActions.loadMemberAllActivitiesSuccess();
      })
    )
  );

  updateMemberActivities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(memberActivityActions.refreshMemberAllActivities),
      withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
      switchMap(([action, clanId]) => {
        this.store.dispatch(
          addNotification({
            notification: { id: 'memberActivityAll', title: 'Updating Member Historical Activities', data: { progress: 0 } }
          })
        );
        const progress = (progressCount) => {
          this.store.dispatch(
            updateNotification({
              notification: {
                id: 'memberActivityAll',
                title: 'Updating Member Activities',
                data: { progress: progressCount }
              }
            })
          );
        };

        return this.memberActivityService.updateAllActivityCache(clanId.toString(), action.member, progress).pipe(
          map((x) => {
            window.localStorage.setItem('lastActivityAllUpdate-' + clanId, new Date().toString());
            this.store.dispatch(
              removeNotification({
                notification: { id: 'memberActivityAll', title: 'Updating Member Historical Activities', data: { progress: 100 } }
              })
            );
            return memberActivityActions.loadMemberAllActivitiesSuccess();
          })
        );
      })
    );
  });
}
