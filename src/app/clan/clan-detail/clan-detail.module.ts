import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail.component';
import { ClanWeeklyProgressModule } from '@destiny/components';
import { ClanOverviewModule } from '@destiny/components/lib/clan-overview';

@NgModule({
    declarations: [ClanDetailComponent],
    imports: [CommonModule, ClanWeeklyProgressModule, ClanOverviewModule]
})
export class ClanDetailModule {}
