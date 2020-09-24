import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { ActivityBarChartModule } from '../shared/charts/activity-bar-chart/activity-bar-chart.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ActivitySelectorPipe } from './activity-selector.pipe';

@NgModule({
  declarations: [ClanRosterActivityTableComponent, ActivitySelectorPipe],

  imports: [CommonModule, MaterialModule, SharedModule, PipesModule, ActivityBarChartModule, DirectivesModule],
  exports: [ClanRosterActivityTableComponent]
})
export class ClanRosterActivityTableModule {}
