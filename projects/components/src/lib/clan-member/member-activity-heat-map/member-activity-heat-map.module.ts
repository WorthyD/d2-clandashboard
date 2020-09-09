import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberActivityHeatMapComponent } from './member-activity-heat-map.component';

import { SharedModule } from '../../shared/shared.module';
import { ActivityHeatmapModule } from '../../shared/charts/activity-heatmap/activity-heatmap.module';

@NgModule({
  declarations: [MemberActivityHeatMapComponent],
  imports: [CommonModule, SharedModule, ActivityHeatmapModule],
  exports: [MemberActivityHeatMapComponent]
})
export class MemberActivityHeatMapModule {}
