import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanActivePopulationComponent } from './clan-active-population.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ClanActivePopulationComponent],
  exports: [ClanActivePopulationComponent],
  imports: [CommonModule, MatCardModule,MatIconModule, DirectivesModule]
})
export class ClanActivePopulationModule {}
