import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail.component';
import { ActivityInfoModule, ClanActivePopulationModule, ClanWeeklyProgressModule } from '@destiny/components';
import { ClanOverviewModule } from '@destiny/components/lib/clan-overview';
import { ClanSeasonProgressModule, ClanMembersCardModule } from '@destiny/components';
import { InactiveMembersComponent } from './inactive-members/inactive-members.component';
import { HighestpowerMembersComponent } from './highestpower-members/highestpower-members.component';
import { RecentlyActiveMembersComponent } from './recently-active-members/recently-active-members.component';
import { BaseMemberCardComponent } from './base-member-card/base-member-card.component';
import { PipesModule } from '@destiny/components';
import { ClanAggregateActivityModule } from './clan-aggregate-activity/clan-aggregate-activity.module';
import { ActivityInfoComponent } from './activity-info/activity-info.component';


@NgModule({
  declarations: [
    ClanDetailComponent,
    InactiveMembersComponent,
    HighestpowerMembersComponent,
    RecentlyActiveMembersComponent,
    BaseMemberCardComponent,
    ActivityInfoComponent
  ],
  imports: [
    CommonModule,
    ClanWeeklyProgressModule,
    ClanOverviewModule,
    ClanSeasonProgressModule,
    ClanMembersCardModule,
    PipesModule,
    ClanAggregateActivityModule,
    ClanActivePopulationModule,
    ActivityInfoModule
  ]
})
export class ClanDetailModule {}
