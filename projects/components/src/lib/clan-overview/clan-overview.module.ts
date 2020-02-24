import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanOverviewComponent } from './clan-overview.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [ClanOverviewComponent],
    exports: [ClanOverviewComponent],
    imports: [CommonModule, MatCardModule]
})
export class ClanOverviewModule {}
