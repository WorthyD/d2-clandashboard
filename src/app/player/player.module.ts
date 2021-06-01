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

@NgModule({
  declarations: [PlayerDetailsContainerComponent],
  imports: [CommonModule, PlayerRoutingModule, PlayerComponentsModule, PipesModule],

  providers: [
    DecimalPipe,
    {
      provide: BasePlayerService,
      useClass: PlayerService
    },
    {
      provide: BasePlayerActivityService,
      useClass: PlayerActivityService
    }
  ]
})
export class PlayerModule {}
