import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRaidStatTableComponent } from './clan-raid-stat-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { RaidCompletionTotalPipe } from './raid-completion-total.pipe';

@NgModule({
  declarations: [ClanRaidStatTableComponent, RaidCompletionTotalPipe],
  imports: [CommonModule, MaterialModule, SharedModule, PipesModule],
  exports: [ClanRaidStatTableComponent]
})
export class ClanRaidStatTableModule {}
