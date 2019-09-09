import { Clan } from 'bungie-parse';

export interface ClanDetailState {
    clan: Clan;
    loaded: boolean;
    loading: boolean;
}

export const initialState: ClanDetailState = {
    clan: null,
    loaded: false,
    loading: false
};
// https://github.com/UltimateAngular/ngrx-store-effects-app

// https://github.com/IntertechInc/ngrx-tutorial
