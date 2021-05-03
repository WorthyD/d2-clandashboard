import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerModule as PlayerComponentsModule } from '../shared/components/player/player.module';
import { PlayerRoutingModule } from './player-routing.module';

@NgModule({
  declarations: [PlayerDetailsContainerComponent],
  imports: [CommonModule, PlayerRoutingModule, PlayerComponentsModule]
})
export class PlayerModule {}
