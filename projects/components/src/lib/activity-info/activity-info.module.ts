import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityInfoComponent } from './activity-info.component';
import { BarChartModule } from '../shared/charts/bar-chart/bar-chart.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LoadingModule } from '../shared/loading/loading.module';
@NgModule({
  declarations: [ActivityInfoComponent],
  exports: [ActivityInfoComponent],
  imports: [CommonModule, BarChartModule, MatMenuModule, MatCardModule, MatDividerModule, LoadingModule]
})
export class ActivityInfoModule {}
