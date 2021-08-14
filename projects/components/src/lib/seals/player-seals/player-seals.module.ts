import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSealsComponent } from './player-seals.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { PlayerSealComponent } from './player-seal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const components = [PlayerSealsComponent, PlayerSealComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatIconModule, MatTooltipModule]
})
export class PlayerSealsModule {}
