import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
//import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';
import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';

import { PlayerService } from './player.service';
import { latestSeason } from '@destiny/models';
import { PlayerActivityService as DataPlayerActivityService } from '@destiny/data';

@Injectable()
export class PlayerActivityService extends BasePlayerService {
  constructor(private playerServiceBase: PlayerService, private playerActivityService: DataPlayerActivityService) {
    super();
  }

  playerActivitiesLoadingSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
  playerActivitiesLoading: Observable<boolean> = this.playerActivitiesLoadingSource.asObservable();

  playerActivities$ = this.playerServiceBase.memberProfile.pipe(
    filter((profile) => !!profile),
    switchMap((profile) => {
      this.playerActivitiesLoadingSource.next(true);
      return this.playerActivityService.getMemberActivity(profile);
    }),
    map((profileActivities) => {
      this.playerActivitiesLoadingSource.next(false);
      return profileActivities.activities;
    })
  );
}
