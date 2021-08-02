import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSealsComponent } from './player-seals.component';

const components = [PlayerSealsComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule]
})
export class PlayerSealsModule {}
