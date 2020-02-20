import {ClanDetails} from 'bungie-models';

export interface ClanDetailState {
    clan: ClanDetails;
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
