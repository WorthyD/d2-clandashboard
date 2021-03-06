import { Injectable } from '@angular/core';
import { ClanState } from '../store/clan-state.state';

import { Store, select } from '@ngrx/store';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { bufferTime, filter, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';
import {
  getAllMembers,
  getIsMembersProfilesLoaded,
  getIsMembersProfilesLoading
} from '../store/member-profiles/member-profiles.selectors';
import { ActivityModeService, ClanActivityService } from '@destiny/data';
import { ActivityModeDefinition } from 'bungie-models';

@Injectable()
export class ClanMemberActivityService {
  activityModeDefinitionOptions: ActivityModeDefinition[];
  constructor(
    private store: Store<ClanState>,
    private clanActivityService: ClanActivityService,
    private activityModeService: ActivityModeService
  ) {
    const activityModeDefinitions = this.activityModeService.getDefinitions();
    const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
    const wantedTypes = [0, 2, 3, 4, 5, 6, 18, 63, 82, 84];
    this.activityModeDefinitionOptions = wantedTypes.map((w) => {
      return defArray.find((x) => x.modeType === w);
    });
  }
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  areMemberProfilesLoading$ = this.store.pipe(select(getIsMembersProfilesLoading));

  selectedActivity$ = new BehaviorSubject(0);
  selectedMembers$ = new BehaviorSubject([]);

  isLoading = true;
  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  clanMemberNames$ = this.preloadedInfo$.pipe(
    map(([isMemberLoaded, id, clanMembers]) => {
      return clanMembers.map((x) => x.profile.data.userInfo.displayName);
    })
  );

  activityStats = [];
  activityStats$ = combineLatest([this.preloadedInfo$, this.selectedActivity$, this.selectedMembers$]).pipe(
    switchMap(([[isMemberLoaded, id, clanMembers], selectedActivity, selectedMembers]) => {
      this.isLoading = true;
      this.activityStats = [];
      if (selectedMembers.length > 0) {
        clanMembers = clanMembers.filter((members) => {
          return selectedMembers.indexOf(members.profile.data.userInfo.displayName) > -1;
        });
      }


      return this.clanActivityService.getClanActivityStats(id, clanMembers, selectedActivity).pipe(
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

  memberSearch(members) {
    this.selectedMembers$.next(members);
  }

  loadMemberActivity() {
    this.activityStats$.subscribe();
  }
  selectEventMode(event) {
    this.selectedActivity$.next(event.modeType);
  }
}
