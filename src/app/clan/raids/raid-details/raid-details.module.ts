import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidDetailsComponent } from './raid-details.component';
import { ClanRaidDetailsTableModule } from '@destiny/components';

@NgModule({
  declarations: [RaidDetailsComponent],
  imports: [CommonModule, ClanRaidDetailsTableModule]
})
export class RaidDetailsModule {}
