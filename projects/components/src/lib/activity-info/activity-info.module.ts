import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityInfoComponent } from './activity-info.component';
import { BarChartModule } from '../shared/charts/bar-chart/bar-chart.module';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [ActivityInfoComponent],
  exports: [ActivityInfoComponent],
  imports: [CommonModule, BarChartModule, MatMenuModule]
})
export class ActivityInfoModule {}
