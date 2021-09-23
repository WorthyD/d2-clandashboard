import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDatabase } from './ClanDatabase';
import { ClanDetailsService } from './clan-details/clan-details.service';
import { ClanMembersService } from './clan-members/clan-members.service';
import { ClanRewardsService } from './clan-rewards/clan-rewards.service';
import { ClanMemberActivityService } from './clan-member-activity/clan-member-activity.service';
import { ProfileMilestonesService } from './profile-milestones/profile-milestones.service';
import { ProfileCollectionsService } from './profile-collections/profile-collections.service';
import { MemberActivityStatsService } from './member-activity-stats/member-activity-stats.service';
import { ClanMemberRecentActivityService } from './clan-member-recent-activity/clan-member-recent-activity.service';
import { MemberMetricsService } from './member-metrics/member-metrics.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ClanDetailsService,
    ClanDatabase,
    ClanMembersService,
    ClanRewardsService,
   // ClanMemberActivityService,
    ProfileMilestonesService,
    ProfileCollectionsService,
    MemberActivityStatsService,
    ClanMemberRecentActivityService,
    MemberMetricsService
  ]
})
export class ClanDbModule {}
