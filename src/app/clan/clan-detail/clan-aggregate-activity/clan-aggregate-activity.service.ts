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
import { filter, map, switchMap } from 'rxjs/operators';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import { getAllMembers, getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../../store/member-activities/member-activities.selectors';
import { selectEffectiveTheme } from 'src/app/root-store/settings/settings.selectors';

import { ProfileActivityWorkerService } from '../../../workers/profile-activity/profile-activity.service';
@Injectable({
  providedIn: 'root'
})
export class ClanAggregateActivityService {
  constructor(
    private store: Store<any>,
    private injector: Injector,
    private activityService: ProfileActivityWorkerService
  ) {}

  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMemberProfiles$ = this.store.pipe(select(getAllMembers));
  isLoading = true;

  theme$ = this.store.pipe(select(selectEffectiveTheme));
  activities$ = this.store.pipe(select(getAllMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  selectedDuration$ = new BehaviorSubject('daily');

  allActivities$ = combineLatest([this.clanId$, this.clanMemberProfiles$]).pipe(
    switchMap(([clanId, memberProfiles]) => {
      return this.activityService.getAllActivitiesFromCache(clanId.toString(), memberProfiles);
    })
  );

  events2 = [];
  events2$ = combineLatest([this.activitiesLoaded$, this.selectedDuration$]).pipe(
    filter(([isLoaded, selectedDuration]) => isLoaded === true),
    switchMap(([isLoaded, selectedDuration]) => {
      const service = this.getInjector(selectedDuration);
      switch (selectedDuration) {
        case 'monthly':
        case 'season':
          this.isLoading = true;
          return this.allActivities$.pipe(
            map((activities) => {
              const summedActivities = service.getClanActivityStatsForDuration(activities, 0);
              this.events2 = summedActivities;
              this.isLoading = false;
            })
          );

        case 'weekly':
        default:
          return this.activities$.pipe(
            map((activities) => {
              const summedActivities = service.getClanActivityStatsForDuration(activities, 0);
              this.events2 = summedActivities;
              this.isLoading = false;
            })
          );
      }
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

  private getService(duration: string) {
    switch (duration) {
      case 'monthly':
      case 'season':
        return this.activityService.getAllActivitiesFromCache;
      case 'weekly':
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
