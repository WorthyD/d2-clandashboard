import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidDetailsAllComponent } from './raid-details-all.component';

import { ClanRaidStatTableModule, SharedModule, MaterialModule } from '@destiny/components';
import { RouterModule } from '@angular/router';
//import { RaidsService } from '../raids.service';

@NgModule({
  declarations: [RaidDetailsAllComponent],
  imports: [ClanRaidStatTableModule, SharedModule, CommonModule, MaterialModule, RouterModule]
})
export class RaidDetailsAllModule {}
