import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanAggregateActivityComponent } from './clan-aggregate-activity.component';
import { ClanAggregateActivityService } from './clan-aggregate-activity.service';
import { ActivityTimeChartModule } from '@destiny/components';

@NgModule({
  declarations: [ClanAggregateActivityComponent],
  exports: [ClanAggregateActivityComponent],
  imports: [CommonModule, ActivityTimeChartModule]
})
export class ClanAggregateActivityModule {}
