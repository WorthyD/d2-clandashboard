import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './raids.component';
import { RaidRoutingModule } from './raids-routing.module';
import { MatTableModule } from '@angular/material/table';
import {
  ClanRaidStatTableModule,
  SharedModule,
  PipesModule,
  MaterialModule,
  RaidCardModule
} from '@destiny/components';
import { RaidsService } from './raids.service';
import { RaidDetailsModule } from './raid-details/raid-details.module';
import { RaidDetailsAllModule } from './raid-details-all/raid-details-all.module';

@NgModule({
  declarations: [RaidsComponent],
  providers: [RaidsService],
  imports: [
    CommonModule,
    RaidRoutingModule,
    MatTableModule,
    ClanRaidStatTableModule,
    SharedModule,
    RaidDetailsModule,
    RaidDetailsAllModule,
    PipesModule,
    MaterialModule,
    RaidCardModule
  ]
})
export class RaidsModule {}
