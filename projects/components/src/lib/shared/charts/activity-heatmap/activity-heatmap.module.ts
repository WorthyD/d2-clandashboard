import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityHeatmapComponent } from './activity-heatmap.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ActivityHeatmapComponent],
  exports: [ActivityHeatmapComponent],
  imports: [CommonModule, NgApexchartsModule]
})
export class ActivityHeatmapModule {}
