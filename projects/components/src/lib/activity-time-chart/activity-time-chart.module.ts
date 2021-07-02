import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityTimeChartComponent } from './activity-time-chart.component';
import { BarChartModule } from '../shared/charts/bar-chart/bar-chart.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ActivityTimeChartComponent],
  exports: [ActivityTimeChartComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, BarChartModule, LoadingModule]
})
export class ActivityTimeChartModule {}
