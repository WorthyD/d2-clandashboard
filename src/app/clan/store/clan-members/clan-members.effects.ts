import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as clanMemberActions from './clan-members.actions';

import { initLoadMemberProfiles } from '../member-profiles/member-profiles.actions';

import { map, switchMap } from 'rxjs/operators';

import { ClanMembersService } from '@destiny/data';

@Injectable()
export class ClanMemberEffects {
  constructor(private actions$: Actions, private store: Store<any>, private clanMemberService: ClanMembersService) {}

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
      })
    )
  );
}
