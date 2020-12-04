import { Injectable } from '@angular/core';
import { ClanState } from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';
import { loadClanMembersActivities } from '../store/member-recent-activities/member-recent-activities.actions';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import { getMemberActivityEntities, getAllMemberActivities,getClanMemberActivitiesLoading } from '../store/member-recent-activities/member-recent-activities.selectors';

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
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  areMembersLoading$ = this.store.pipe(select(getClanMemberActivitiesLoading));
  areMemberProfilesLoading$ = this.store.pipe(select(getIsMembersProfilesLoading));
  memberActivities$ = this.store.pipe(select(getAllMemberActivities));

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
