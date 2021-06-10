import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
//import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';
import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';

import { PlayerService } from './player.service';
import { latestSeason } from '@destiny/models';
import { PlayerActivityService as DataPlayerActivityService } from '@destiny/data';
import {
  DailyClanAggregateTimeService,
  MonthlyClanAggregateTimeService,
  SeasonClanAggregateTimeService,
  WeeklyClanAggregateTimeService
} from '@destiny/data';

@Injectable()
export class PlayerActivityService extends BasePlayerService {
  constructor(
    private playerServiceBase: PlayerService,
    private playerActivityService: DataPlayerActivityService,
    private injector: Injector
  ) {
    super();
  }

  playerActivitiesLoadingSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
  playerActivitiesLoading: Observable<boolean> = this.playerActivitiesLoadingSource.asObservable();
  selectedDuration$ = new BehaviorSubject('daily');
  selectedActivity$ = new BehaviorSubject(0);

  playerActivitiesRaw$ = this.playerServiceBase.memberProfile.pipe(
    filter((profile) => !!profile),
    switchMap((profile) => {
      this.playerActivitiesLoadingSource.next(true);
      // leverage activity ID elsewhwere
      return this.playerActivityService.getMemberActivity(profile);
    }),
    map((profileActivities) => {
      this.playerActivitiesLoadingSource.next(false);
      return profileActivities.activities;
    }),
    shareReplay(1)
  );

  playerActivities$ = combineLatest([this.playerActivitiesRaw$, this.selectedActivity$]).pipe(
    map(([activities, activityId]) => {
      if (activityId > 0) {
        activities = activities.filter((a) => a.activityDetails.modes.indexOf(activityId) > -1);
      }
      return activities;
    })
  );

  playerActivitiesGrouped$ = this.playerActivities$.pipe(
    map((x) => {
      return this.playerActivityService.groupMemberActivities(x);
    })
  );

  playerFilteredEvents$ = combineLatest([
    this.playerActivitiesGrouped$,
    this.playerActivitiesLoading,
    this.selectedDuration$
  ]).pipe(
    filter(([activities, isLoaded, selectedDuration]) => {
      return !!activities;
    }),
    map(([activities, isLoaded, selectedDuration]) => {
      const service = this.getInjector(selectedDuration);
      const summedActivities = service.getClanActivityStatsForDuration(
        [{ id: '', activities: activities.activities }],
        0
      );
      return summedActivities;
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
}
