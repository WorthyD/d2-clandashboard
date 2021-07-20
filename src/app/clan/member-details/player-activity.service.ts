import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
//import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';
import { PlayerActivityService as BasePlayerService } from '../../shared/components/player/player-activity.service';

import { PlayerService } from './player.service';
import { latestSeason } from '@destiny/models';
import { ClanMemberActivityService, PlayerActivityService as DataPlayerActivityService } from '@destiny/data';
import {
  DailyClanAggregateTimeService,
  MonthlyClanAggregateTimeService,
  SeasonClanAggregateTimeService,
  WeeklyClanAggregateTimeService
} from '@destiny/data';
import { select, Store } from '@ngrx/store';
import { MemberProfileState } from '../store/member-profiles/member-profiles.state';
import { ClanMemberState } from '../store/clan-members/clan-members.state';
import {
  getClanMemberActivitiesLoaded,
  getSelectedClanMemberActivities
} from '../store/member-activities/member-activities.selectors';
import { selectEffectiveTheme } from 'src/app/root-store/settings/settings.selectors';

@Injectable()
export class PlayerActivityService extends BasePlayerService {
  constructor(
    private playerServiceBase: PlayerService,
    // private playerActivityService: DataPlayerActivityService,
    private memberStore: Store<ClanMemberState>,
    private profileStore: Store<MemberProfileState>,
    private clanMemberActivityService: ClanMemberActivityService,
    private store: Store<any>,
    private injector: Injector
  ) {
    super();
  }
  themeSource$: BehaviorSubject<string> = new BehaviorSubject('');
  theme$ = this.store.pipe(select(selectEffectiveTheme));
  playerActivitiesLoadingSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
  playerActivitiesLoading: Observable<boolean> = this.playerActivitiesLoadingSource.asObservable();
  selectedDuration$ = new BehaviorSubject('daily');
  selectedActivity$ = new BehaviorSubject(0);

  // playerActivitiesRaw$ = this.playerServiceBase.memberProfile.pipe(
  //   filter((profile) => !!profile),
  //   switchMap((profile) => {
  //     this.playerActivitiesLoadingSource.next(true);
  //     // leverage activity ID elsewhwere
  //     return this.playerActivityService.getMemberActivity(profile);
  //   }),
  //   map((profileActivities) => {
  //     this.playerActivitiesLoadingSource.next(false);
  //     return profileActivities.activities;
  //   }),
  //   shareReplay(1)
  // );

  // playerActivities$ = combineLatest([this.playerActivitiesRaw$, this.selectedActivity$]).pipe(
  //   map(([activities, activityId]) => {
  //     if (activityId > 0) {
  //       activities = activities.filter((a) => a.activityDetails.modes.indexOf(activityId) > -1);
  //     }
  //     return activities;
  //   })
  // );
  memberActivitiesRaw$ = this.store.pipe(select(getSelectedClanMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));

  playerActivities$ = combineLatest([
    this.playerServiceBase.clanId$,
    this.playerServiceBase.memberProfile$,
    this.selectedActivity$
  ]).pipe(
    filter(([id, m, sa]) => !!m),
    switchMap(([id, x, sa]) => {
      this.playerActivitiesLoadingSource.next(true);
      return this.clanMemberActivityService.getMemberActivity(id, x, sa);
    }),
    map((x) => {
      this.playerActivitiesLoadingSource.next(false);
      return x.activities;
    })
  );

  playerFilteredEvents$ = combineLatest([
    this.memberActivitiesRaw$,
    this.activitiesLoaded$,
    this.selectedDuration$
  ]).pipe(
    tap((x) => {
      this.playerActivitiesLoadingSource.next(true);
    }),
    filter(([activities, isLoaded, selectedDuration]) => {
      return isLoaded === true;
    }),
    map(([activities, isLoaded, selectedDuration]) => {
      const service = this.getInjector(selectedDuration);
      // console.log('a', activities[0]);
      // const clonedActivities = activities.map((x) => {
      //   return Object.assign({}, x);
      // });
      //  this.activities = activities;

      //const summedActivities = service.getClanActivityStatsForDuration([{ id: '', activities }], 0);
      // this.events = summedActivities;
      //this.isLoading = false;
      this.playerActivitiesLoadingSource.next(false);
      return service.getClanActivityStatsForDuration([{ id: '', activities }], 0);
    })
  );

  // playerActivitiesGrouped$ = this.playerActivities$.pipe(
  //   map((x) => {
  //     return this.playerActivityService.groupMemberActivities(x);
  //   })
  // );

  // playerFilteredEvents$ = combineLatest([
  //   this.playerActivitiesGrouped$,
  //   this.playerActivitiesLoading,
  //   this.selectedDuration$
  // ]).pipe(
  //   filter(([activities, isLoaded, selectedDuration]) => {
  //     return !!activities;
  //   }),
  //   map(([activities, isLoaded, selectedDuration]) => {
  //     const service = this.getInjector(selectedDuration);
  //     const summedActivities = service.getClanActivityStatsForDuration(
  //       [{ id: '', activities: activities.activities }],
  //       0
  //     );
  //     return summedActivities;
  //   })
  // );
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
}
