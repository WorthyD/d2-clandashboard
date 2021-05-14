import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerModule as PlayerComponentsModule } from '../shared/components/player/player.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerService } from './player.service';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';

@NgModule({
  declarations: [PlayerDetailsContainerComponent],
  imports: [CommonModule, PlayerRoutingModule, PlayerComponentsModule],
  providers: [
    {
      provide: BasePlayerService,
      useClass: PlayerService
    }
  ]
})
export class PlayerModule {}
