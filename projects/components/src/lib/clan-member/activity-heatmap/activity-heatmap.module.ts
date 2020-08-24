import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityHeatmapComponent } from './activity-heatmap.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ActivityHeatmapComponent],
  imports: [CommonModule, SharedModule],
  exports: [ActivityHeatmapComponent]
})
export class ActivityHeatmapModule {}
