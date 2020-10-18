import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDungeonStatTableComponent } from './clan-dungeon-stat-table.component';
import { DungeonCompletionTotalPipe } from './dungeon-completion-total.pipe';



@NgModule({
  declarations: [ClanDungeonStatTableComponent, DungeonCompletionTotalPipe],
  imports: [
    CommonModule
  ]
})
export class ClanDungeonStatTableModule { }
