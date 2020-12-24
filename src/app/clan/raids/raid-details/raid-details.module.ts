import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidDetailsComponent } from './raid-details.component';
import { ClanRaidDetailsTableModule, MaterialModule, SharedModule } from '@destiny/components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RaidDetailsComponent],
  imports: [CommonModule, ClanRaidDetailsTableModule, SharedModule, CommonModule, MaterialModule, RouterModule]
})
export class RaidDetailsModule {}
