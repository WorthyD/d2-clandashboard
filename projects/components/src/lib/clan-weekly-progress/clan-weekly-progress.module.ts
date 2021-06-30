import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingModule } from '../shared/loading/loading.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ClanWeeklyProgressComponent],
  exports: [ClanWeeklyProgressComponent],
  imports: [CommonModule, MatCardModule, MatTooltipModule, MatButtonModule, LoadingModule]
})
export class ClanWeeklyProgressModule {}
