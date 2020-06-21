import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClanWeeklyProgressComponent],
  exports: [ClanWeeklyProgressComponent],
  imports: [CommonModule, MatCardModule, MatTooltipModule, MaterialModule, SharedModule]
})
export class ClanWeeklyProgressModule {}
