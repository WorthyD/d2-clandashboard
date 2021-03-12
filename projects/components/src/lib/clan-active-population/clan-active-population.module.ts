import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanActivePopulationComponent } from './clan-active-population.component';
import { MaterialModule } from '../shared/modules/material.module';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [ClanActivePopulationComponent],
  exports: [ClanActivePopulationComponent],
  imports: [CommonModule, MaterialModule, DirectivesModule]
})
export class ClanActivePopulationModule {}
