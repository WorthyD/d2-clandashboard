import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { ClanRaidsService } from '@destiny/data';

import { MemberProfile, SealMembers } from 'bungie-models';
import { getAllMembers } from '../clan-members/clan-members.selectors';

import { loadRaidFailure, loadRaidSuccess, loadRaids } from './raid.actions';
import * as clanMemberActions from '../clan-members/clan-members.actions';
import * as clanMemberSelectors from '../clan-members/clan-members.selectors';

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
export class SealEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private clanRaidsService: ClanRaidsService //    private profileMilestonesService: ProfileMilestonesService
  ) {}

  loadRaidStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRaids),
      withLatestFrom(
        this.store.select(clanIdSelectors.getClanIdState),
        this.store.select(clanMemberSelectors.getAllMembers)
      ),
      switchMap(([action, clanId, clanMembers]) => {
        //const hashes = seals.map((x) => x.completionRecordHash);
        return this.clanRaidsService.getClanRaidStats(clanId, clanMembers).pipe(
          map((memberStats) => {
            return loadRaidSuccess({ raidStats: memberStats });
          })
        );
        // return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
        //   map((sealProfiles) => {
        //     const sealProfilesCleaned: SealMembers[] = sealProfiles.map((sealMember) => {
        //       return {
        //         seal: seals.find((seal) => sealMember.milestoneHash === seal.completionRecordHash),
        //         members: sealMember.profiles
        //       };
        //     });

        //     return loadSealSuccess({ sealMembers: sealProfilesCleaned });
        //   })
        // );
      })
    )
  );
}
