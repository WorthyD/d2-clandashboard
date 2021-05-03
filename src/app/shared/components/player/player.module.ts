import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerActivityComponent } from './player-activity/player-activity.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';



@NgModule({
  declarations: [
    PlayerDetailsComponent,
    PlayerActivityComponent,
    PlayerOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
