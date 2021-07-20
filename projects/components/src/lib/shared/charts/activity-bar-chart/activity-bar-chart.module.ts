import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBarChartComponent } from './activity-bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ActivityBarChartComponent],
  exports: [ActivityBarChartComponent],
  imports: [CommonModule, NgApexchartsModule]
})
export class ActivityBarChartModule {}
