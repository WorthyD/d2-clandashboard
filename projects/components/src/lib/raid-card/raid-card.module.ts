import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidCardComponent } from './raid-card.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [RaidCardComponent],
  exports: [RaidCardComponent],
  imports: [CommonModule, MaterialModule, PipesModule]
})
export class RaidCardModule {}
