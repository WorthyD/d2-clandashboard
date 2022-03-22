import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as memberActivityActions from './member-activities.actions';

import * as clanIdSelectors from '../clan-id/clan-id.selector';

import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { loadMemberProfileSuccess } from '../member-profiles/member-profiles.actions';
import { getAllMembers } from '../member-profiles/member-profiles.selectors';
import { nowPlusMinutes } from 'projects/data/src/lib/utility/date-utils';
import { addNotification, removeNotification, updateNotification } from '../notifications/notifications.actions';
import { ProfileRecentActivityWorkerService } from 'src/app/workers/profile-recent-activity/profile-recent-activity.service';

@Injectable()
export class MemberActivityEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private memberActivityService: ProfileRecentActivityWorkerService
  ) {}

  profilesLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMemberProfileSuccess),
      withLatestFrom(this.store.select(getAllMembers)),
      map(([action, memberProfiles]) => {
        return memberActivityActions.loadMemberActivities({ member: memberProfiles });
      })
    );
  });

  loadMemberActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberActivityActions.loadMemberActivities),
      withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
      switchMap(([action, clanId]) =>
        this.memberActivityService.getAllRecentActivitiesFromCache(clanId.toString(), action.member).pipe(
          map((x) => {
            const lastUpdate = new Date(window.localStorage.getItem('lastActivityUpdate-' + clanId));
            const refreshThreshold = nowPlusMinutes(-60);

            // Updating is expensive. Limit it to 1 time an hour.
            if (refreshThreshold > lastUpdate) {
              this.store.dispatch(memberActivityActions.refreshMemberActivities({ member: action.member }));
            }
            return x;
          })
        )
      ),
      map((x) => {
        return memberActivityActions.loadMemberActivitiesSuccess({ memberActivities: x });
      })
    )
  );

  updateMemberActivities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(memberActivityActions.refreshMemberActivities),
      withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
      switchMap(([action, clanId]) => {
        this.store.dispatch(
          addNotification({
            notification: { id: 'memberActivity', title: 'Updating Member Recent Activities', data: { progress: 0 } }
          })
        );
        const progress = (progressCount) => {
          this.store.dispatch(
            updateNotification({
              notification: {
                id: 'memberActivity',
                title: 'Updating Member Recent Activities',
                data: { progress: progressCount }
              }
            })
          );
        };

        return this.memberActivityService.updateAllRecentActivityCache(clanId.toString(), action.member, progress).pipe(
          // return this.memberActivityService.updateAllActivityCache(clanId.toString(), action.member, progress).pipe(
          switchMap((x) => {
            window.localStorage.setItem('lastActivityUpdate-' + clanId, new Date().toString());
            this.store.dispatch(
              removeNotification({
                notification: {
                  id: 'memberActivity',
                  title: 'Updating Member Recent Activities',
                  data: { progress: 100 }
                }
              })
            );
            return this.memberActivityService.getAllRecentActivitiesFromCache(clanId.toString(), action.member);
          })
        );
      }),
      map((x) => {
        return memberActivityActions.refreshMemberActivitiesComplete({ memberActivities: x });
      })
    );
  });
  // )
  //);

  //   // updateMembers$ = createEffect(
  //   //   () =>
  //   //     this.actions$.pipe(
  //   //       ofType(memberActivityActions.loadMemberActivities),
  //   //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
  //   //       tap(([action, clanId]) => {
  //   //         this.updater.update('memberActivities', clanId, action.member);
  //   //       })
  //   //     ),
  //   //   { dispatch: false }
  //   // );

  //   // syncMemberProfiles$ = createEffect(
  //   //   () =>
  //   //     this.actions$.pipe(
  //   //       ofType(memberActivityActions.loadMemberActivitiesFromAPI),
  //   //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
  //   //       tap(([action, clanId]) => {
  //   //         const memberActivities: MemberActivityStats = action.memberActivities;

  //   //         if (memberActivities) {
  //   //           this.clanDB.update(clanId.toString(), 'MemberActivities', [memberActivities]);
  //   //         }
  //   //       })
  //   //     ),
  //   //   { dispatch: false }
  //   // );
}
