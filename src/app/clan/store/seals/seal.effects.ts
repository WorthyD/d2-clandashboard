import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from, forkJoin, BehaviorSubject } from 'rxjs';

// import * as clanDetailActions from './clan-detail.actions';
// import * as clanMemberActions from './clan-members.actions';

// import { ClanDatabase } from '../../../services/ClanDatabase';
// import { Updater } from '../../services/updater';
import { ProfileMilestonesService } from '@destiny/data';

import { MemberProfile, SealMembers } from 'bungie-models';
import { getAllMembers } from '../clan-members/clan-members.selectors';

//import * as memberProfileActions from './member-profiles.actions';
import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';
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
    private profileMilestonesService: ProfileMilestonesService
  ) {}

  loadSeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSeals),
      switchMap(({ clanId, clanMembers, seals }) => {
        const hashes = seals.map((x) => x.hash);
        return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
          map((sealProfiles) => {
            const sealProfilesCleaned: SealMembers[] = sealProfiles.map((sealMember) => {
              return {
                seal: seals.find((seal) => sealMember.milestoneHash === seal.hash),
                members: sealMember.profiles
              };
            });

            return loadSealSuccess({ sealMembers: sealProfilesCleaned });
          })
        );
      })
    )
  );
}
