import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDungeonStatTableComponent } from './clan-dungeon-stat-table.component';
import { DungeonCompletionTotalPipe } from './dungeon-completion-total.pipe';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ClanDungeonStatTableComponent, DungeonCompletionTotalPipe],
  exports: [ClanDungeonStatTableComponent],
  imports: [CommonModule, MaterialModule, SharedModule, PipesModule],
})
export class ClanDungeonStatTableModule {}
