import { createAction, props } from '@ngrx/store';

import { ClanReward } from 'bungie-models';

const base = '[Clan_Rewards] - ';

export const loadRewards = createAction(
    `${base} Load Rewards`,
    props<{ clanId: number }>()
);
export const loadRewardsSuccess = createAction(
    `${base} Load Reward Success`,
    props<{ clanReward: ClanReward }>()
);
export const loadReqardsFailure = createAction(
    `${base} Load Reward Failure`,
    props<{ error: any }>()
);


export const updateClanFromAPI = createAction(
    `${base} updateRewardsFromAPI`,
    props<{ clanReward: ClanReward }>()
);


export const loadRewardsFromAPI = createAction(
    `${base} Load Reward API`,
    props<{ clanReward: ClanReward }>()
);
export const loadRewardsFromAPISuccess = createAction(
    `${base} Load Reward API Success`,
    props<{ clanReward: ClanReward }>()
);
export const loadRewardsFromAPIFailure = createAction(
    `${base} Load Reward API Failure`,
    props<{ error: any }>()
);

export const checkClanCache = createAction(
    `${base} Check Reward Cache`,
    props<{ clanId: number }>()
);
