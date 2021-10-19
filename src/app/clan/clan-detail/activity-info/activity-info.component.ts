import { Component, Input, OnInit } from '@angular/core';
import { ActivityInfo } from '@destiny/components';
import { select, Store } from '@ngrx/store';
import { ProfileActivityWorkerService } from 'src/app/workers/profile-activity/profile-activity.service';

import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import { getAllMembers, getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../../store/member-activities/member-activities.selectors';
import { combineLatest } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

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

  event$ = combineLatest([this.clanId$, this.clanMemberProfiles$]).pipe(
    filter(([clanId, clanMemberProfiles]) => !!clanMemberProfiles),
    switchMap(([clanId, clanMemberProfiles]) => {
      return this.service.getAllClanActivities(clanId.toString(), clanMemberProfiles, this.activityInfo.activityCode);
    })
  );

  constructor(private service: ProfileActivityWorkerService, private store: Store<any>) {}

  ngOnInit(): void {}
  // Raid 4
  // Crucible 5
  // Strikes 18
  // Gambit 63
}
