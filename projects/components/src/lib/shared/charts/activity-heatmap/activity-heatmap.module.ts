import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityHeatmapComponent } from './activity-heatmap.component';

@NgModule({
  declarations: [ActivityHeatmapComponent],
  exports: [ActivityHeatmapComponent],
  imports: [CommonModule]
})
export class ActivityHeatmapModule {}
