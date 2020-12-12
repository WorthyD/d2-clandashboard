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

  isLoading = true;
  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  activityStats = [];
  activityStats$ = combineLatest([this.preloadedInfo$, this.selectedActivity$]).pipe(
    switchMap(([[isMemberLoaded, id, clanMembers], selectedActivity]) => {
      this.isLoading = true;
      this.activityStats = [];
      console.log('updating', selectedActivity);
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

  loadMemberActivity() {
    this.activityStats$.pipe(take(1)).subscribe();
  }
  selectEventMode(event) {
    //  console.log(event);
    this.selectedActivity$.next(event.modeType);
  }
}
