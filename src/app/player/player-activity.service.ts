import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
//import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';
//import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';

import { PlayerService } from './player.service';
import { latestSeason } from '@destiny/models';
import { PlayerActivityService as DataPlayerActivityService } from '@destiny/data';

@Injectable()
export class PlayerActivityService {
  constructor(private playerServiceBase: PlayerService, private playerActivityService: DataPlayerActivityService) {
    console.log('constructor', playerServiceBase);
  }
  playerActivitiesLoading;

  playerActivities$ = this.playerServiceBase.memberProfile.pipe(
    tap((x) => {
      console.log('x', x);
    }),
    filter((profile) => !!profile),
    switchMap((profile) => {
      console.log('activities');
      this.playerActivitiesLoading = true;

      return this.playerActivityService.getMemberActivity(profile);
    }),
    map((profileActivities) => {
      this.playerActivitiesLoading = false;
      return profileActivities.activities;
    })
  );
}
