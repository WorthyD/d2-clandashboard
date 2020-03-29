import { createReducer, on } from '@ngrx/store';
import * as clanState from './clan-rewards.state';
import * as clanActions from './clan-rewards.actions';

export const ClanRewardReducer = createReducer(
    clanState.initialState,
    on(clanActions.loadRewards, state => ({
        ...state,
        loading: true
    })),
    on(clanActions.loadRewardsSuccess, (state, { clanReward }) => ({
        ...state,
        clanReward: clanReward,
        loaded: true,
        loading: false
    })),
    on(clanActions.updateClanFromAPI, (state, { clanReward }) => ({
        ...state,
        clan: clanReward,
        loaded: true,
        loading: false
    }))
);
