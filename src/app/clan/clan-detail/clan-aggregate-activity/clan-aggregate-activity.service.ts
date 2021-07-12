import { Injectable, Injector } from '@angular/core';
import {
  DailyClanAggregateTimeService,
  MonthlyClanAggregateTimeService,
  WeeklyClanAggregateTimeService,
  SeasonClanAggregateTimeService
} from '@destiny/data';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import { getAllMembers, getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../../store/member-activities/member-activities.selectors';
import { selectEffectiveTheme } from 'src/app/root-store/settings/settings.selectors';
@Injectable({
  providedIn: 'root'
})
export class ClanAggregateActivityService {
  constructor(private store: Store<any>, private service: DailyClanAggregateTimeService, private injector: Injector) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isLoading = true;

  theme$ = this.store.pipe(select(selectEffectiveTheme));
  activities$ = this.store.pipe(select(getAllMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  selectedDuration$ = new BehaviorSubject('daily');

  events2 = [];
  events2$ = combineLatest([this.activities$, this.activitiesLoaded$, this.selectedDuration$]).pipe(
    filter(([activities, isLoaded, selectedDuration]) => isLoaded === true),
    map(([activities, isLoaded, selectedDuration]) => {
      const service = this.getInjector(selectedDuration);
      // console.log('a', activities[0]);
      // const clonedActivities = activities.map((x) => {
      //   return Object.assign({}, x);
      // });

      const summedActivities = service.getClanActivityStatsForDuration(activities, 0);
      this.events2 = summedActivities;
      this.isLoading = false;
    })
  );

  private getInjector(duration: string) {
    switch (duration) {
      case 'weekly':
        return this.injector.get(WeeklyClanAggregateTimeService);
      case 'monthly':
        return this.injector.get(MonthlyClanAggregateTimeService);
      case 'season':
        return this.injector.get(SeasonClanAggregateTimeService);
      default:
        return this.injector.get(DailyClanAggregateTimeService);
    }
  }

  load() {
    this.events2$.subscribe();
  }
  changeDuration(duration) {
    this.selectedDuration$.next(duration);
  }
}

const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== 'object' || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};
