import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonsComponent } from './dungeons.component';
import { DungeonRoutingModule } from './dungeons-routing.module';
import { ClanDungeonStatTableModule } from '@destiny/components';

@NgModule({
  declarations: [DungeonsComponent],
  imports: [CommonModule, DungeonRoutingModule, ClanDungeonStatTableModule]
})
export class DungeonsModule {}
