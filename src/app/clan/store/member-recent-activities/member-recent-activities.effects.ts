import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from } from 'rxjs';

import { ClanDatabase } from '../../../../../projects/data/src/lib/clan-db/ClanDatabase';

import * as memberActivityActions from './member-recent-activities.actions';
import * as clanMemberProfileSelectors from '../member-profiles/member-profiles.selectors';

import { ClanMemberRecentActivityService, ClanRewardsService } from '@destiny/data';
import * as clanIdSelectors from '../clan-id/clan-id.selector';
import * as clanRewardActions from '../clan-rewards/clan-rewards.actions';

import { catchError, map, switchMap, tap, distinctUntilChanged, first, filter, withLatestFrom, toArray } from 'rxjs/operators';

@Injectable()
export class MemberRecentStatEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private memberActivityService: ClanMemberRecentActivityService,
    private clanRewardService: ClanRewardsService
  ) {}

  loadMemberActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(memberActivityActions.loadClanMembersActivities),
      withLatestFrom(
        this.store.select(clanIdSelectors.getClanIdState),
        this.store.select(clanMemberProfileSelectors.getAllMembers)
      ),
      switchMap(([action, clanId, memberProfiles]) => {
        //switchMap((action) => {
          //memberProfiles = memberProfiles.slice(0, 4);
        return this.memberActivityService.getSerializedProfilesActivity(clanId, memberProfiles).pipe(
          tap((x) => {
            this.store.dispatch(memberActivityActions.loadMemberRecentActivitiesSuccess({ memberActivities: x }));
          }),
          toArray(),
          map((x) => {
            return memberActivityActions.loadClanMembersActivitiesSuccess();
          })
        );
      })
    )
  );
}
