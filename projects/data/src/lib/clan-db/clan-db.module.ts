import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profiles/profile.service';
import { ClanDatabase } from './ClanDatabase';
import { ClanDetailsService } from './clan-details/clan-details.service';
import { ClanMembersService } from './clan-members/clan-members.service';
import { ClanRewardsService } from './clan-rewards/clan-rewards.service';
import { ClanMemberActivityService } from './clan-member-activity/clan-member-activity.service';
import { ProfileMilestonesService } from './profile-milestones/profile-milestones.service';
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
    ProfileMilestonesService
  ]
})
export class ClanDbModule {}
