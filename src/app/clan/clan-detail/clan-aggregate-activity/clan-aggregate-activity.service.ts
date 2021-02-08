import { Injectable, Injector } from '@angular/core';
import { DailyClanAggregateTimeService, WeeklyClanAggregateTimeService } from '@destiny/data';
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
  constructor(private store: Store<any>, private service: DailyClanAggregateTimeService, private injector: Injector) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isLoading = true;

  activities$ = this.store.pipe(select(getAllMemberActivities));
  activities2$ = this.store.pipe(select(getAllMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  selectedDuration$ = new BehaviorSubject('daily');

  events2 = [];
  events2$ = combineLatest([this.activities$, this.activitiesLoaded$, this.selectedDuration$]).pipe(
    filter(([activities, isLoaded, selectedDuration]) => isLoaded === true),
    map(([activities, isLoaded, selectedDuration]) => {
      const service = this.getInjector(selectedDuration);
      // console.log('a', activities[0]);
      const clonedActivities = activities.map((x) => {
        return Object.assign({}, x);
      });

      const summedActivities = service.getClanActivityStatsForDuration(deepCopyFunction(clonedActivities), 0);
      // this.events2 = summedActivities;
      this.isLoading = false;
    })
  );

  private getInjector(duration: string) {
    switch (duration) {
      case 'weekly':
        return this.injector.get(WeeklyClanAggregateTimeService);
      default:
        return this.injector.get(DailyClanAggregateTimeService);
    }
  }

  // events = [];
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
  // );

  load() {
    //this.events$.subscribe();
    this.events2$.subscribe();
  }
  changeDuration(duration) {
    this.selectedDuration$.next(duration);
  }
}

const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}
