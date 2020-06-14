import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanOverviewComponent } from './clan-overview.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [ClanOverviewComponent],
    exports: [ClanOverviewComponent],
    imports: [CommonModule, MatCardModule, MatListModule, MatIconModule]
})
export class ClanOverviewModule {}
