import { createAction, props } from '@ngrx/store';

import { ClanDetails } from 'bungie-models';

const base = '[Clan_Rewards] - ';

export const loadRewards = createAction(
    `${base} Load Rewards`,
    props<{ clanId: number }>()
);
export const loadRewardsSuccess = createAction(
    `${base} Load Reward Success`,
    props<{ clanDetails: ClanDetails }>()
);
export const loadReqardsFailure = createAction(
    `${base} Load Reward Failure`,
    props<{ error: any }>()
);


export const updateClanFromAPI = createAction(
    `${base} updateRewardsFromAPI`,
    props<{ clanDetails: ClanDetails }>()
);


export const loadClanFromAPI = createAction(
    `${base} Load Reward API`,
    props<{ clanId: number }>()
);
export const loadClanFromAPISuccess = createAction(
    `${base} Load Reward API Success`,
    props<{ clanDetails: ClanDetails }>()
);
export const loadClanFromAPIFailure = createAction(
    `${base} Load Reward API Failure`,
    props<{ error: any }>()
);

export const checkClanCache = createAction(
    `${base} Check Reward Cache`,
    props<{ clanId: number }>()
);
