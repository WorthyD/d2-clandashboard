import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanCrucibleStatsTableComponent } from './clan-crucible-stats-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClanCrucibleStatsTableComponent],
  exports: [ClanCrucibleStatsTableComponent],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class ClanCrucibleStatsModule {}
