import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityTimeChartComponent } from './activity-time-chart.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [ActivityTimeChartComponent],
  exports: [ActivityTimeChartComponent],
  imports: [CommonModule, MaterialModule]
})
export class ActivityTimeChartModule {}
