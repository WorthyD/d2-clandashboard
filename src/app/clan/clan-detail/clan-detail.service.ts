import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MilestoneDefinitionService, MilestoneHashes } from '@destiny/data';
import { getClanRewards, getClanRewardsLoading } from '../store/clan-rewards/clan-rewards.selectors';
import { ClanRewardState } from '../store/clan-rewards/clan-rewards.state';
import { Observable, combineLatest, of } from 'rxjs';
import { ClanReward, ClanProgress, ClanDetails } from 'bungie-models';
import { ClanWeeklyProgressModel, ClanMemberListItem } from '@destiny/components';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import { filter, map } from 'rxjs/operators';
import { AppConstants } from '../../app.constants';
import { getClanMemberEntities, getAllMembers } from '../store/clan-members/clan-members.selectors';
import { getMemberProfileEntities } from '../store/member-profiles/member-profiles.selectors';
import { getClanMemberId } from '@destiny/data';
import { ClanHashes } from '@destiny/models';

import {
  getLast24HourCount,
  getLastMonthCount,
  getLastWeekCount,
  getPrev24HourCount,
  getPrevMonthCount,
  getPrevWeekCount
} from './eventGrouper';
import {
  getAllMemberActivities,
  getClanMemberActivitiesLoaded,
  getClanMemberActivitiesUpdating
} from '../store/member-activities/member-activities.selectors';
@Injectable()
export class ClanDetailService {
  constructor(
    private store: Store<ClanRewardState>,
    private detailStore: Store<clanDetailStore.ClanDetailState>,
    private milestoneDefinitionService: MilestoneDefinitionService
  ) {}

  clanDetails$: Observable<ClanDetails> = this.store.pipe(select(clanDetailSelectors.getClanDetail));

  private clanMembers$ = this.store.pipe(select(getAllMembers));
  private clanMemberProfiles$ = this.store.pipe(select(getMemberProfileEntities));

  clanWeekRewardsLoading$ = this.store.pipe(select(getClanRewardsLoading));
  clanDetailsLoading$ = this.store.pipe(select(clanDetailSelectors.getClanDetailLoading));
  activitiesUpdating$ = this.store.pipe(select(getClanMemberActivitiesUpdating));

  allClanMemberProfiles$ = combineLatest(this.clanMembers$, this.clanMemberProfiles$, (members, profiles) => {
    const allUsers: ClanMemberListItem[] = [];
    members.forEach((member) => {
      allUsers.push({
        member: member,
        profile: profiles[getClanMemberId(member)]
      });
    });
    return allUsers;
  });

  highestLLMembers$ = this.allClanMemberProfiles$.pipe(
    map((members) => {
      if (members.length > 0) {
        const sortedMembers = members.sort((a, b) => {
          return (a.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus ?? 0) >
            (b.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus ?? 0)
            ? -1
            : 1;
        });
        return sortedMembers.slice(0, 10);
      }
    })
  );

  lastLoginMembers$ = this.allClanMemberProfiles$.pipe(
    map((members) => {
      if (members.length > 0) {
        const sortedMembers = members.sort((a, b) => {
          return a.profile?.profile.data.dateLastPlayed > b.profile?.profile.data.dateLastPlayed ? -1 : 1;
        });
        return sortedMembers.slice(0, 10);
      }
    })
  );

  inactiveMemberList$ = this.allClanMemberProfiles$.pipe(
    map((members) => {
      if (members.length > 0) {
        const sortedMembers = members.sort((a, b) => {
          return a.profile?.profile.data.dateLastPlayed > b.profile?.profile.data.dateLastPlayed ? 1 : -1;
        });
        return sortedMembers.slice(0, 10);
      }
    })
  );

  clanRewards$: Observable<ClanReward> = this.store.pipe(select(getClanRewards));
  clanRewardDefinitions$ = this.milestoneDefinitionService.getDefinitionsByHash(MilestoneHashes.ClanRewards);

  clanSeasonalProgression$: Observable<ClanProgress> = this.clanDetails$.pipe(
    map((clan) => {
      if (clan?.clanInfo?.d2ClanProgressions && clan?.clanInfo?.d2ClanProgressions[ClanHashes.ClanLevel]) {
        return clan?.clanInfo?.d2ClanProgressions[ClanHashes.ClanLevel];
      }
      return null;
    })
  );

  clanWeekRewards$: Observable<ClanWeeklyProgressModel> = combineLatest(
    this.clanRewards$,
    this.clanRewardDefinitions$,
    (clanWeekRewards, clanRewardDefinitions) => {
      return this.mapClanRewards(clanWeekRewards, clanRewardDefinitions, MilestoneHashes.ClanCurrentWeekRewards);
    }
  );
  clanLastWeekRewards$: Observable<ClanWeeklyProgressModel> = combineLatest(
    this.clanRewards$,
    this.clanRewardDefinitions$,
    (clanWeekRewards, clanRewardDefinitions) => {
      return this.mapClanRewards(clanWeekRewards, clanRewardDefinitions, MilestoneHashes.ClanPastWeekRewards);
    }
  );
  activities$ = this.store.pipe(select(getAllMemberActivities));
  activitiesLoaded$ = this.store.pipe(select(getClanMemberActivitiesLoaded));
  events2$ = combineLatest([this.activities$, this.activitiesLoaded$]).pipe(
    filter(([activities, isLoaded]) => isLoaded === true),
    map(([activities, isLoaded]) => {
      return {
        last24Hours: getLast24HourCount(activities),
        previous24Hours: getPrev24HourCount(activities),
        lastWeek: getLastWeekCount(activities),
        previousWeek: getPrevWeekCount(activities),

        lastMonth: getLastMonthCount(activities),
        previousMonth: getPrevMonthCount(activities)
      };
    })
  );

  private mapClanRewards(clanWeekRewards, clanRewardDefinitions, weekHash) {
    const retVal: ClanWeeklyProgressModel = {
      title: '',
      rewards: null
    };
    if (clanRewardDefinitions) {
      const rewardDefinitions = clanRewardDefinitions.rewards[weekHash];
      retVal.title = rewardDefinitions.displayProperties.name;

      if (clanWeekRewards && clanWeekRewards.rewards) {
        const rewards = clanWeekRewards.rewards.find((x) => x.rewardCategoryHash === weekHash);
        retVal.rewards = rewards?.entries?.map((r) => {
          return {
            earned: r.earned,
            definition: rewardDefinitions.rewardEntries[r.rewardEntryHash]
          };
        });
      }
    }

    return retVal;
  }
}
