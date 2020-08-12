import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './raids.component';
import { RaidRoutingModule } from './raids-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ClanRaidStatTableModule } from '@destiny/components';

@NgModule({
  declarations: [RaidsComponent],
  imports: [CommonModule, RaidRoutingModule, MatTableModule, ClanRaidStatTableModule]
})
export class RaidsModule {}
