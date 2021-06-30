import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanOverviewComponent } from './clan-overview.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LoadingModule } from '../shared/loading/loading.module';
import { IconsModule } from '../icons/icons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ClanOverviewComponent],
  exports: [ClanOverviewComponent],
  imports: [CommonModule, MatCardModule, MatListModule, LoadingModule, MatIconModule, IconsModule, MatButtonModule]
})
export class ClanOverviewModule {}
