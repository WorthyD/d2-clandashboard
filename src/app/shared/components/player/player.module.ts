import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerActivityComponent } from './player-activity/player-activity.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';
import {
  MaterialModule,
  PipesModule,
  MemberOverviewModule,
  SeasonPassModule,
  CharacterCardModule,
  ActivityTimeChartModule,
  MemberCalloutModule
} from '@destiny/components';

import { PlayerService } from './player.service';
import { PlayerActivityService } from './player-activity.service';

const components = [PlayerDetailsComponent, PlayerActivityComponent, PlayerOverviewComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    ActivityTimeChartModule,
    MaterialModule,
    MemberCalloutModule,
    RouterModule,
    PipesModule,
    MemberOverviewModule,
    SeasonPassModule,
    CharacterCardModule
  ],
  providers: [PlayerService, PlayerActivityService]
})
export class PlayerModule {}
