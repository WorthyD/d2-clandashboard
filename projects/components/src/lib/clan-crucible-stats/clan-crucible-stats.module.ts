import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanCrucibleStatsComponent } from './clan-crucible-stats.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClanCrucibleStatsComponent],
  exports: [ClanCrucibleStatsComponent],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class ClanCrucibleStatsModule {}
