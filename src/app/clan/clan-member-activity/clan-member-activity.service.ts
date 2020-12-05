import { Injectable } from '@angular/core';
import { ClanState } from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';
import { loadClanMembersActivities } from '../store/member-recent-activities/member-recent-activities.actions';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import {
  getMemberActivityEntities,
  getAllMemberActivities,
  getClanMemberActivitiesLoading
} from '../store/member-recent-activities/member-recent-activities.selectors';

import { Observable, combineLatest, of } from 'rxjs';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import {
  getMemberProfileEntities,
  getAllMembers,
  getIsMembersProfilesLoaded,
  getIsMembersProfilesLoading
} from '../store/member-profiles/member-profiles.selectors';
import { ClanMemberRecentActivityService, getMemberProfileId } from '@destiny/data';

@Injectable()
export class ClanMemberActivityService {
  constructor(private store: Store<ClanState>, private memberActivityService: ClanMemberRecentActivityService) {}
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  areMembersLoading$ = this.store.pipe(select(getClanMemberActivitiesLoading));
  areMemberProfilesLoading$ = this.store.pipe(select(getIsMembersProfilesLoading));
  memberActivities$ = this.store.pipe(select(getAllMemberActivities));

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
      this.memberActivityService.getSerializedProfilesActivity(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
        mergeMap((members) => {
          this.activityStats = this.activityStats.concat({
          });
        }),
        toArray(),
        map((stats) => {})
      );
    })
  );

  loadMemberActivity() {
    this.isMembersLoaded$
      .pipe(
        filter((f) => f === true),
        take(1)
      )
      .subscribe((x) => {
        this.store.dispatch(loadClanMembersActivities());
      });
  }

  //  activityStats$ = this.
}
