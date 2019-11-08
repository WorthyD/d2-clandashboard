// import * as clanActions from './clan-detail.actions';
// import * as clanState from './clan-detail.state';
// import { Clan } from 'bungie-parse';

// export function ClanDetailReducer(
//     state = clanState.initialState,
//     action: clanActions.Actions
// ): clanState.ClanDetailState {
//         console.log(action.type);
//     switch (action.type) {
//         case clanActions.LOAD_CLAN: {
//             console.log('loading clan');
//             const clan: Clan = action.payload;
//             const entities = {
//                 ...state.entities,
//                 [clan.groupId]: clan
//             };

//             return {
//                 ...state,
//                 entities
//             };
//        }

//         // case clanActions.LOAD_CLAN_FAIL: {
//         //     return {
//         //         ...state,
//         //         loading: false
//         //     };
//         // }

//         // case clanActions.LOAD_CLAN_SUCCESS: {
//         //     const clan: Clan = action.payload;
//         //     const entities = {
//         //         ...state.entities,
//         //         [clan.groupId]: clan
//         //     };

//         //     return {
//         //         ...state,
//         //         entities
//         //     };
//         // }
//     }
//     return state;
// }

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
