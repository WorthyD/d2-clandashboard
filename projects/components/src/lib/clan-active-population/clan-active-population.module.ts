import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanActivePopulationComponent } from './clan-active-population.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [ClanActivePopulationComponent],
  exports: [ClanActivePopulationComponent],
  imports: [CommonModule, MaterialModule]
})
export class ClanActivePopulationModule {}
