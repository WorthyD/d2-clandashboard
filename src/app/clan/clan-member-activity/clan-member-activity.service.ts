import { Injectable } from '@angular/core';
import { ClanState } from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import {  combineLatest } from 'rxjs';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import {
  getAllMembers,
  getIsMembersProfilesLoaded,
  getIsMembersProfilesLoading
} from '../store/member-profiles/member-profiles.selectors';
import { ClanActivityService } from '@destiny/data';


@Injectable()
export class ClanMemberActivityService {
  constructor(private store: Store<ClanState>, private clanActivityService: ClanActivityService) {}
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  areMemberProfilesLoading$ = this.store.pipe(select(getIsMembersProfilesLoading));

  isLoading = true;
  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  activityStats = [];
  activityStats$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      return this.clanActivityService.getClanActivityStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.activityStats = this.activityStats.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
        })
      );
    })
  );

  loadMemberActivity() {
    this.activityStats$.pipe(take(1)).subscribe();
  }
}
