import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrucibleComponent } from './crucible.component';
import { CrucibleRoutingModule } from './crucible-routing.module';
import { ClanCrucibleStatsModule } from '@destiny/components';

@NgModule({
  declarations: [CrucibleComponent],
  imports: [CommonModule, CrucibleRoutingModule, ClanCrucibleStatsModule]
})
export class CrucibleModule {}