import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profiles/profile.service';
import { ClanDatabase } from './ClanDatabase';
import { ClanDetailsService } from './clan-details/clan-details.service';
import { ClanMembersService } from './clan-members/clan-members.service';
import { ClanRewardsService } from './clan-rewards/clan-rewards.service';
import { ClanMemberActivityService } from './clan-member-activity/clan-member-activity.service';
import { ProfileMilestonesService } from './profile-milestones/profile-milestones.service';
import { MemberActivityStatsService } from './member-activity-stats/member-activity-stats.service';
import { ClanMemberRecentActivityService } from './clan-member-recent-activity/clan-member-recent-activity.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ProfileService,
    ClanDetailsService,
    ClanDatabase,
    ClanMembersService,
    ClanRewardsService,
    ClanMemberActivityService,
    ProfileMilestonesService,
    MemberActivityStatsService,
    ClanMemberRecentActivityService
  ]
})
export class ClanDbModule {}
