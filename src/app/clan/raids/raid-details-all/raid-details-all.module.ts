import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidDetailsAllComponent } from './raid-details-all.component';

import { ClanRaidStatTableModule, SharedModule } from '@destiny/components';
//import { RaidsService } from '../raids.service';

@NgModule({
  declarations: [RaidDetailsAllComponent],
  imports: [ClanRaidStatTableModule, SharedModule, CommonModule]
})
export class RaidDetailsAllModule {}
