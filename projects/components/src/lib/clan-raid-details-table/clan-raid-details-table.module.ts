import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRaidDetailsTableComponent } from './clan-raid-details-table.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ClanRaidDetailsTableComponent],
  exports: [ClanRaidDetailsTableComponent],
  imports: [CommonModule , MaterialModule, SharedModule, PipesModule]
})
export class ClanRaidDetailsTableModule {}
