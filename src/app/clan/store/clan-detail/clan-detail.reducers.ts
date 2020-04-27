

import { createReducer, on } from '@ngrx/store';
import * as clanState from './clan-detail.state';
import * as clanActions from './clan-detail.actions';

export const ClanDetailReducer = createReducer(
    clanState.initialState,
    on(clanActions.loadClan, state => ({
        ...state,
        loading: true
    })),
    on(clanActions.loadClanSuccess, (state, { clanDetails }) => ({
        ...state,
        clan: clanDetails,
        loaded: true,
        loading: false
    })),
    on(clanActions.updateClanFromAPI, (state, { clanDetails }) => ({
        ...state,
        clan: clanDetails,
        loaded: true,
        loading: false
    }))
);
