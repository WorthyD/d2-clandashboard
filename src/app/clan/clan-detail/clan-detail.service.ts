import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MilestoneDefinitionService, MilestoneHashes } from '@destiny/data';
import { getClanRewards } from '../store/clan-rewards/clan-rewards.selectors';
import { ClanRewardState } from '../store/clan-rewards/clan-rewards.state';
import { Observable, combineLatest } from 'rxjs';
import { ClanReward } from 'bungie-models';
import { ClanWeeklyProgressModel } from '@destiny/components';
//import { MilestoneDefinitionService } from '@destiny/data';


@Injectable()
export class ClanDetailService {
    constructor(
        private store: Store<ClanRewardState>,
        private milestoneDefinitionService: MilestoneDefinitionService
    ) {}

    clanRewards$: Observable<ClanReward> = this.store.pipe(select(getClanRewards));
    clanRewardDefinitions$ = this.milestoneDefinitionService.getDefinitionsByHash(
        MilestoneHashes.ClanRewards
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

    private mapClanRewards(clanWeekRewards, clanRewardDefinitions, weekHash) {
        const rewards = clanWeekRewards.rewards.find(x => x.rewardCategoryHash === weekHash);
        const rewardDefinitions = clanRewardDefinitions.rewards[weekHash];

        return {
            title: rewardDefinitions.displayProperties.name,
            rewards: rewards.entries.map(r => {
                return {
                    earned: r.earned,
                    definition: rewardDefinitions.rewardEntries[r.rewardEntryHash]
                };
            })
        };
    }
}
