import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityTimeChartComponent } from './activity-time-chart.component';
import { MaterialModule } from '../shared/modules/material.module';
import { BarChartModule } from '../shared/charts/bar-chart/bar-chart.module';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  declarations: [ActivityTimeChartComponent],
  exports: [ActivityTimeChartComponent],
  imports: [CommonModule, MaterialModule, BarChartModule, LoadingModule]
})
export class ActivityTimeChartModule {}
