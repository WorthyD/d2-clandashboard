import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBarChartComponent } from './activity-bar-chart.component';

@NgModule({
  declarations: [ActivityBarChartComponent],
  exports: [ActivityBarChartComponent],
  imports: [CommonModule]
})
export class ActivityBarChartModule {}
