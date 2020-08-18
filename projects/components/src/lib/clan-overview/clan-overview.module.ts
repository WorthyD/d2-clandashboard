import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanOverviewComponent } from './clan-overview.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
@NgModule({
  declarations: [ClanOverviewComponent],
  exports: [ClanOverviewComponent],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class ClanOverviewModule {}
