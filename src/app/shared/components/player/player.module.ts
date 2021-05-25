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
  CharacterCardModule
} from '@destiny/components';

const components = [PlayerDetailsComponent, PlayerActivityComponent, PlayerOverviewComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PipesModule,
    MemberOverviewModule,
    SeasonPassModule,
    CharacterCardModule
  ]
})
export class PlayerModule {}
