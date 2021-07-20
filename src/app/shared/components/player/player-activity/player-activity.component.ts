import { Component, OnInit } from '@angular/core';
import { ActivityModeService } from '@destiny/data';
import { ActivityModeDefinition } from 'bungie-models';
import { PlayerActivityService } from '../player-activity.service';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.scss']
})
export class PlayerActivityComponent implements OnInit {

  activityModeDefinitionOptions: ActivityModeDefinition[];
  constructor(private playerActivityService: PlayerActivityService,
   private activityModeService: ActivityModeService,
 ) {

    const activityModeDefinitions = this.activityModeService.getDefinitions();
    const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
    const wantedTypes = [0, 2, 3, 4, 5, 6,  18, 63, 82, 84];
    this.activityModeDefinitionOptions = wantedTypes.map((w) => {
      return defArray.find((x) => x.modeType === w);
    });
  }
  activityIsLoading = this.playerActivityService.playerActivitiesLoading;
  playerActivities = this.playerActivityService.playerActivities$;
  theme = this.playerActivityService.theme$;
  ngOnInit(): void {}
  selectEventMode(event){
    this.playerActivityService.selectedActivity$.next(event.modeType);
  }
}
