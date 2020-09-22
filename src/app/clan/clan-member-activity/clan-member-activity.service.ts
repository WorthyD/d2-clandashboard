import { Injectable } from '@angular/core';
import { ClanState } from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';
import { loadClanMembersActivities } from '../store/member-recent-activities/member-recent-activities.actions';
import { getMemberActivityEntities } from '../store/member-recent-activities/member-recent-activities.selectors';

import { Observable, combineLatest, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import {
  getMemberProfileEntities,
  getAllMembers,
  getIsMembersProfilesLoaded,
  getIsMembersProfilesLoading
} from '../store/member-profiles/member-profiles.selectors';
import { getMemberProfileId } from '@destiny/data';

@Injectable()
export class ClanMemberActivityService {
  constructor(private store: Store<ClanState>) {}

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  areMembersLoading$ = this.store.pipe(select(getIsMembersProfilesLoading));
  memberActivities$ = this.store.pipe(select(getMemberActivityEntities));

  memberProfileActivities$ = combineLatest(
    this.isMembersLoaded$,
    this.clanMemberProfiles$,
    this.memberActivities$,
    (loaded, members, activities) => {
      if (loaded === true) {
        return members.map((x) => {
          return { ...x, ...activities[getMemberProfileId(x)] };
        });
      }
    }
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
}
