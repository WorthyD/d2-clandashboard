import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MilestoneDefinitionService, MilestoneHashes } from '@destiny/data';
import { getClanRewards } from '../store/clan-rewards/clan-rewards.selectors';
import { ClanRewardState } from '../store/clan-rewards/clan-rewards.state';
import { Observable, combineLatest, of } from 'rxjs';
import { ClanReward, ClanProgress, ClanDetails } from 'bungie-models';
import { ClanWeeklyProgressModel } from '@destiny/components';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import { map } from 'rxjs/operators';

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

    clanRewards$: Observable<ClanReward> = this.store.pipe(select(getClanRewards));
    clanRewardDefinitions$ = this.milestoneDefinitionService.getDefinitionsByHash(
        MilestoneHashes.ClanRewards
    );

    clanSeasonalProgression$: Observable<ClanProgress> = this.clanDetails$.pipe(
        map((clan) => {
            console.log(clan);
            if (clan?.clanInfo?.d2ClanProgressions) {
                //return clan?.clanInfo?.d2ClanProgressions[584850370]
            }
            return of(null);
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
