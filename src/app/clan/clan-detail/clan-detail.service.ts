import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MilestoneDefinitionService, MilestoneHashes } from '@destiny/data';
import { getClanRewards } from '../store/clan-rewards/clan-rewards.selectors';
import { ClanRewardState } from '../store/clan-rewards/clan-rewards.state';
import { Observable, combineLatest } from 'rxjs';
import { ClanReward } from 'bungie-models';
//import { MilestoneDefinitionService } from '@destiny/data';

@Injectable()
export class ClanDetailService {
    constructor(
        private store: Store<ClanRewardState>,
        private milestoneDefinitionService: MilestoneDefinitionService
    ) {}

    clanRewards$: Observable<ClanReward> = this.store.pipe(
        select(getClanRewards)
    );
    clanRewardDefinitions$ = this.milestoneDefinitionService.getDefinitionsByHash(
        MilestoneHashes.ClanRewards
    );

    clanWeekRewards$: Observable<any> = combineLatest(
        this.clanRewards$,
        this.clanRewardDefinitions$,
        (clanWeekRewards, clanRewardDefinitions) => {
            if (clanWeekRewards && clanRewardDefinitions) {
                const rewards = clanWeekRewards.rewards.find(
                    x =>
                        x.rewardCategoryHash ==
                        MilestoneHashes.ClanCurrentWeekRewards
                );

                console.log(rewards);

                return {
                    title: clanRewardDefinitions.displayProperties.name,
                    rewards: rewards.entries.map(r => {
                        return {
                            entry: r.earned,
                            definitions:
                                clanRewardDefinitions.rewards[
                                    rewards.rewardCategoryHash
                                ].
                        };
                    })
                    //     return { earned: r.earned };
                    // })
                };
            }
            return null;
        }
    );
}
