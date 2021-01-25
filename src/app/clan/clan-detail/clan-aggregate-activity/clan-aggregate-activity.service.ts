import { Injectable } from '@angular/core';
import { DailyClanAggregateTimeService } from '@destiny/data';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { nowPlusDays } from 'projects/data/src/lib/utility/date-utils';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import {
  getAllMembers,
  getIsMembersProfilesLoaded,
  getIsMembersProfilesLoading
} from '../../store/member-profiles/member-profiles.selectors';

@Injectable({
  providedIn: 'root'
})
export class ClanAggregateActivityService {
  constructor(private store: Store<any>, private service: DailyClanAggregateTimeService) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isLoading = true;
  // preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
  //   filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
  //   map((x) => {
  //     return x;
  //   })
  // );

  events = [];
  events$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      this.events = [];

      return this.service.getClanActivityStatsForDuration(id, clanMembers, nowPlusDays(-30), 0).pipe(
        map((stats) => {
          this.events = stats;
          console.log(stats);
          this.isLoading = false;
        })
      );

      // if (selectedMembers.length > 0) {
      //   clanMembers = clanMembers.filter((members) => {
      //     return selectedMembers.indexOf(members.profile.data.userInfo.displayName) > -1;
      //   });
      // }
      // return this.clanActivityService.getClanActivityStats(id, clanMembers, selectedActivity).pipe(
      //   bufferTime(500, undefined, 20),
      //   mergeMap((members) => {
      //     this.activityStats = this.activityStats.concat(members);
      //     return members;
      //   }),
      //   toArray(),
      //   map((stats) => {
      //     this.isLoading = false;
      //   })
      // );
    })
  );

  load() {
    this.events$.subscribe();
  }
}
