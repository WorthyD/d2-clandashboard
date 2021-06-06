import { Injectable } from '@angular/core';
import { ClanMemberSeasonPassProgression } from '@destiny/components';
import { DestinyEntitiesCharactersDestinyCharacterComponent } from 'bungie-api-angular';

import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PlayerService } from './player.service';

@Injectable()
export class PlayerActivityService {
  playerActivitiesLoadingSource: BehaviorSubject<boolean>;
  selectedDuration$: BehaviorSubject<string>;
  playerActivitiesLoading: Observable<boolean>;
  playerActivities$: Observable<any>;
  playerFilteredEvents$: Observable<any>;
  constructor() {}
}
