import { Injectable, Injector } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import { MemberProfileState } from '../../store/member-profiles/member-profiles.state';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import {
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating,
  getSelectedClanMemberActivities
} from '../../store/member-activities/member-activities.selectors';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  DailyClanAggregateTimeService,
  MonthlyClanAggregateTimeService,
  SeasonClanAggregateTimeService,
  WeeklyClanAggregateTimeService
} from '@destiny/data';

@Injectable()
export class ActivityTimeChartService {
  selectedMember$ = this.memberStore.pipe(select(getSelectedClanMember));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  memberActivities$ = this.store.pipe(select(getSelectedClanMemberActivities));

  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));
  selectedDuration$ = new BehaviorSubject('daily');

  constructor(
    private memberStore: Store<ClanMemberState>,
    private profileStore: Store<MemberProfileState>,
    private store: Store<any>,
    private injector: Injector
  ) {}
  isLoading = true;
  events = [];
  events$ = combineLatest([this.memberActivities$, this.activitiesLoaded$, this.selectedDuration$]).pipe(
    filter(([activities, isLoaded, selectedDuration]) => {
      return isLoaded === true;
    }),
    map(([activities, isLoaded, selectedDuration]) => {

      const service = this.getInjector(selectedDuration);
      // console.log('a', activities[0]);
      // const clonedActivities = activities.map((x) => {
      //   return Object.assign({}, x);
      // });

      const summedActivities = service.getClanActivityStatsForDuration([{ id: '', activities }], 0);
      this.events = summedActivities;
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
  changeDuration(duration) {
    this.selectedDuration$.next(duration);
  }
  load(){
    this.events$.subscribe();
  }
}
