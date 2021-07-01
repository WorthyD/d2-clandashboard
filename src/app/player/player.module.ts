import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerModule as PlayerComponentsModule } from '../shared/components/player/player.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerService } from './player.service';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';

import { PlayerActivityService } from './player-activity.service';
import { PlayerActivityService as BasePlayerActivityService } from '../shared/components/player/player-activity.service';
import { PipesModule } from '@destiny/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DirectivesModule } from '../shared/directives/directives.module';
import { MatListModule } from '@angular/material/list';
import { DialogModule } from '../shared/components/dialog/dialog.module';

@NgModule({
  declarations: [PlayerDetailsContainerComponent],
  imports: [
    CommonModule,
    DialogModule,
    MatListModule,
    DirectivesModule,
    MatSidenavModule,
    PlayerRoutingModule,
    PlayerComponentsModule,
    PipesModule
  ],

  providers: [
    DecimalPipe,
    PlayerService,
    PlayerActivityService,
    {
      provide: BasePlayerService,
      useExisting: PlayerService
    },
    {
      provide: BasePlayerActivityService,
      useExisting: PlayerActivityService
    }
  ]
})
export class PlayerModule {}
