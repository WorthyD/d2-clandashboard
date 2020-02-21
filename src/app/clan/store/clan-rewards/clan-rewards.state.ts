import {ClanReward} from 'bungie-models';

export interface ClanRewardState {
    clanReward: ClanReward;
    loaded: boolean;
    loading: boolean;
}

export const initialState: ClanRewardState = {
    clanReward: null,
    loaded: false,
    loading: false
};
// https://github.com/UltimateAngular/ngrx-store-effects-app

// https://github.com/IntertechInc/ngrx-tutorial
