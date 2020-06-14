import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MilestoneDefinitionService, MilestoneHashes } from '@destiny/data';
import { getClanRewards } from '../store/clan-rewards/clan-rewards.selectors';
import { ClanRewardState } from '../store/clan-rewards/clan-rewards.state';
import { Observable, combineLatest, of } from 'rxjs';
import { ClanReward, ClanProgress, ClanDetails } from 'bungie-models';
import { ClanWeeklyProgressModel, ClanMemberListItem } from '@destiny/components';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import { map } from 'rxjs/operators';
import { AppConstants } from '../../app.constants';
import { getClanMemberEntities, getAllMembers } from '../store/clan-members/clan-members.selectors';
import { getMemberProfileEntities } from '../store/member-profiles/member-profiles.selectors';
@Injectable()
export class ClanDetailService {
    constructor(
        private store: Store<ClanRewardState>,
        private detailStore: Store<clanDetailStore.ClanDetailState>,
        private milestoneDefinitionService: MilestoneDefinitionService
    ) {}

    clanDetails$: Observable<ClanDetails> = this.store.pipe(
        select(clanDetailSelectors.getClanDetail)
    );

    private clanMembers$ = this.store.pipe(select(getAllMembers));
    private clanMemberProfiles$ = this.store.pipe(select(getMemberProfileEntities));

    allClanMemberProfiles$ = combineLatest(
        this.clanMembers$,
        this.clanMemberProfiles$,
        (members, profiles) => {
            console.log('stuff');
            const allUsers: ClanMemberListItem[] = [];
            members.forEach((x) => {
                allUsers.push({
                    member: x,
                    profile: profiles[x.destinyUserInfo.membershipId],
                });
            });
            return allUsers;
        }
    );

    highestLLMembers$ = this.allClanMemberProfiles$.pipe(
        map((members) => {
            if (members.length > 0) {
                const sortedMembers = members.sort((a, b) => {
                    return (a.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus ??
                        0) >
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
                    return a.profile?.profile.data.dateLastPlayed >
                        b.profile?.profile.data.dateLastPlayed
                        ? -1
                        : 1;
                });
                return sortedMembers.slice(0, 10);
            }
        })
    );

    inactiveMemberList$ = this.allClanMemberProfiles$.pipe(
        map((members) => {
            if (members.length > 0) {
                const sortedMembers = members.sort((a, b) => {
                    return a.profile?.profile.data.dateLastPlayed >
                        b.profile?.profile.data.dateLastPlayed
                        ? 1
                        : -1;
                });
                return sortedMembers.slice(0, 10);
            }
        })
    );
    /*
    clanMembers$ = createSelector(
        getAllMembers,
        getMemberProfileEntities,
        (members, profiles) => {
            const allUsers: ClanMemberListItem[] = [];
            members.forEach(x => {
                allUsers.push({
                    member: x,
                    profile: profiles[x.destinyUserInfo.membershipId]
                });
            });
            return allUsers;
        }
    );
    */

    clanRewards$: Observable<ClanReward> = this.store.pipe(select(getClanRewards));
    clanRewardDefinitions$ = this.milestoneDefinitionService.getDefinitionsByHash(
        MilestoneHashes.ClanRewards
    );

    clanSeasonalProgression$: Observable<ClanProgress> = this.clanDetails$.pipe(
        map((clan) => {
            if (
                clan?.clanInfo?.d2ClanProgressions &&
                clan?.clanInfo?.d2ClanProgressions[AppConstants.SeasonHash]
            ) {
                return clan?.clanInfo?.d2ClanProgressions[AppConstants.SeasonHash];
            }
            return null;
        })
    );

    clanWeekRewards$: Observable<ClanWeeklyProgressModel> = combineLatest(
        this.clanRewards$,
        this.clanRewardDefinitions$,
        (clanWeekRewards, clanRewardDefinitions) => {
            if (clanWeekRewards && clanRewardDefinitions) {
                return this.mapClanRewards(
                    clanWeekRewards,
                    clanRewardDefinitions,
                    MilestoneHashes.ClanCurrentWeekRewards
                );
            }
            return null;
        }
    );
    clanLastWeekRewards$: Observable<ClanWeeklyProgressModel> = combineLatest(
        this.clanRewards$,
        this.clanRewardDefinitions$,
        (clanWeekRewards, clanRewardDefinitions) => {
            if (clanWeekRewards && clanRewardDefinitions) {
                return this.mapClanRewards(
                    clanWeekRewards,
                    clanRewardDefinitions,
                    MilestoneHashes.ClanPastWeekRewards
                );
            }
            return null;
        }
    );
    private mapClanRewards(clanWeekRewards, clanRewardDefinitions, weekHash) {
        const rewards = clanWeekRewards.rewards.find((x) => x.rewardCategoryHash === weekHash);
        const rewardDefinitions = clanRewardDefinitions.rewards[weekHash];

        return {
            title: rewardDefinitions.displayProperties.name,
            rewards: rewards.entries.map((r) => {
                return {
                    earned: r.earned,
                    definition: rewardDefinitions.rewardEntries[r.rewardEntryHash],
                };
            }),
        };
    }
}
