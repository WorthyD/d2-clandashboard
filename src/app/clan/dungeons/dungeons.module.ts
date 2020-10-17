import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonsComponent } from './dungeons.component';
import { DungeonRoutingModule } from './dungeons-routing.module';

@NgModule({
  declarations: [DungeonsComponent],
  imports: [CommonModule, DungeonRoutingModule]
})
export class DungeonsModule {}
