import { Component, Input, OnInit } from '@angular/core';
import { ActivityInfo } from '@destiny/components';
import { select, Store } from '@ngrx/store';
// import { ProfileActivityWorkerService } from 'src/app/workers/profile-activity/profile-activity.service';
import { ProfileRecentActivityWorkerService } from 'src/app/workers/profile-recent-activity/profile-recent-activity.service';

import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import { getAllMembers, getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../../store/member-activities/member-activities.selectors';
import { combineLatest } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { selectEffectiveTheme } from 'src/app/root-store/settings/settings.selectors';

@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss']
})
export class ActivityInfoComponent implements OnInit {
  @Input()
  activityInfo: ActivityInfo;
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  theme$ = this.store.pipe(select(selectEffectiveTheme));
  loading: boolean = true;

  event$ = combineLatest([this.clanId$, this.clanMemberProfiles$, this.activitiesUpdating$]).pipe(
    tap(() => (this.loading = true)),
    filter(([clanId, clanMemberProfiles, updating]) => !!clanMemberProfiles && clanMemberProfiles.length > 0),
    switchMap(([clanId, clanMemberProfiles, updating]) => {
      return this.service.getAllecentClanActivities(
        clanId.toString(),
        clanMemberProfiles,
        this.activityInfo.activityCode
      );
    }),
    tap(() => (this.loading = false))
  );

  // constructor(private service: ProfileActivityWorkerService, private store: Store<any>) {}
  constructor(private service: ProfileRecentActivityWorkerService, private store: Store<any>) {}

  ngOnInit(): void {}
  // Raid 4
  // Crucible 5
  // Strikes 18
  // Gambit 63
}
