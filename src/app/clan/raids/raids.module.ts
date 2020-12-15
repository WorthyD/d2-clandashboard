import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './raids.component';
import { RaidRoutingModule } from './raids-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ClanRaidStatTableModule, SharedModule } from '@destiny/components';
import { RaidsService } from './raids.service';

@NgModule({
  declarations: [RaidsComponent],
  providers: [RaidsService],
  imports: [CommonModule, RaidRoutingModule, MatTableModule, ClanRaidStatTableModule, SharedModule]
})
export class RaidsModule {}
