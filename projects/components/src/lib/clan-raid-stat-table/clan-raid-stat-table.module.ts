import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRaidStatTableComponent } from './clan-raid-stat-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClanRaidStatTableComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [ClanRaidStatTableComponent]
})
export class ClanRaidStatTableModule {}
