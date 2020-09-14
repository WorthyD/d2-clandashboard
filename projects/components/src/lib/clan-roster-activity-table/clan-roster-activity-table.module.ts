import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ClanRosterActivityTableComponent],

  imports: [CommonModule, MaterialModule, SharedModule, PipesModule],
  exports: [ClanRosterActivityTableComponent]
})
export class ClanRosterActivityTableModule {}
