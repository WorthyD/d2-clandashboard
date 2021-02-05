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
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../../store/member-activities/member-activities.selectors';
// import { groupActivitiesByDate } from 'projects/data/src/lib/utility/group-activity-by-date';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { groupActivityStatsByDate } from 'projects/data/src/lib/utility/group-activity-by-date';

@Injectable({
  providedIn: 'root'
})
export class ClanAggregateActivityService {
  constructor(private store: Store<any>, private service: DailyClanAggregateTimeService) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isLoading = true;

  activities$ = this.store.pipe(select(getAllMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  selectedDuration$ = new BehaviorSubject('daily');



  events2 = [];
  events2$ = combineLatest([this.activities$, this.activitiesLoaded$]).pipe(
    filter(([activities, isLoaded]) => isLoaded === true),
    map(([activities, isLoaded]) => {
      //const a = [...activities.map((y) => y.activities)]; //.filter((x) => x.date > nowPlusDays(-30)))];
      //const a = [...activities.map((y) => y.activities).filter((x) => x.date > nowPlusDays(-30))];
      //const a [] = [...activities.map((y) => y.activities)].filter((x) => x.date > nowPlusDays(-30));
      // const xpDate = nowPlusDays(-30);
      // const a = [...activities.map((y) => y.activities.filter((x) => x.date > xpDate))];

      // const flata = [].concat.apply([], a);
       const summedActivities = this.service.getClanActivityStatsForDuration(activities, 0);



      this.events2 = summedActivities;
      this.isLoading = false;
    })
  );

<<<<<<< HEAD
  events = [];
=======
  // events = [];
>>>>>>> @{-1}
  // events$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMemberProfiles$]).pipe(
  //   switchMap(([isMemberLoaded, id, clanMembers]) => {
  //     this.isLoading = true;
  //     this.events = [];

  //     return this.service.getClanActivityStatsForDuration(id, clanMembers, nowPlusDays(-30), 0).pipe(
  //       map((stats) => {
  //         this.events = stats;
  //         this.isLoading = false;
  //       })
  //     );

  //     // if (selectedMembers.length > 0) {
  //     //   clanMembers = clanMembers.filter((members) => {
  //     //     return selectedMembers.indexOf(members.profile.data.userInfo.displayName) > -1;
  //     //   });
  //     // }
  //     // return this.clanActivityService.getClanActivityStats(id, clanMembers, selectedActivity).pipe(
  //     //   bufferTime(500, undefined, 20),
  //     //   mergeMap((members) => {
  //     //     this.activityStats = this.activityStats.concat(members);
  //     //     return members;
  //     //   }),
  //     //   toArray(),
  //     //   map((stats) => {
  //     //     this.isLoading = false;
  //     //   })
  //     // );
  //   })
<<<<<<< HEAD
  //);
=======
  // );
>>>>>>> @{-1}

  load() {
    //this.events$.subscribe();
    this.events2$.subscribe();
  }
  changeDuration(duration){
    this.selectedDuration$.next(duration);
  }
}
