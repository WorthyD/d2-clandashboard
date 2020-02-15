import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOverviewComponent } from './member-overview.component';
import { ActivityGridModule } from '@destiny/components';

@NgModule({
    declarations: [MemberOverviewComponent],
    imports: [CommonModule, ActivityGridModule]
})
export class MemberOverviewModule {}
