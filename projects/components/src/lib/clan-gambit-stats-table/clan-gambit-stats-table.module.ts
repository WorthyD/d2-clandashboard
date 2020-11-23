import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanGambitStatsTableComponent } from './clan-crucible-stats-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClanGambitStatsTableComponent],
  exports: [ClanGambitStatsTableComponent],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class ClanGambitStatsModule {}
