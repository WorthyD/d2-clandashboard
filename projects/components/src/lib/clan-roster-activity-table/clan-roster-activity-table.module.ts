import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { ActivityBarChartModule } from '../shared/charts/activity-bar-chart/activity-bar-chart.module';

@NgModule({
  declarations: [ClanRosterActivityTableComponent],

  imports: [CommonModule, MaterialModule, SharedModule, PipesModule, ActivityBarChartModule],
  exports: [ClanRosterActivityTableComponent]
})
export class ClanRosterActivityTableModule {}
