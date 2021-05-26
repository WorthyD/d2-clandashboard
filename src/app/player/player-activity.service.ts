import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerActivityService as BasePlayerService } from '../shared/components/player/player-activity.service';
import { PlayerService } from './player.service';
import { latestSeason } from '@destiny/models';

@Injectable()
export class PlayerActivityService extends BasePlayerService {
  constructor(private playerServiceBase: PlayerService) {
    super(playerServiceBase);
  }
}
