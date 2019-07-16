import * as clanActions from './clan-detail.actions';
import * as clanState from './clan-detail.state';
import { Clan } from 'bungie-parse';

export function ClanDetailReducer(
    state = clanState.initialState,
    action: clanActions.Actions
): clanState.ClanDetailState {
        console.log(action.type);
    switch (action.type) {
        case clanActions.LOAD_CLAN: {
            console.log('loading clan');
            const clan: Clan = action.payload;
            const entities = {
                ...state.entities,
                [clan.groupId]: clan
            };

            return {
                ...state,
                entities
            };
       }

        // case clanActions.LOAD_CLAN_FAIL: {
        //     return {
        //         ...state,
        //         loading: false
        //     };
        // }

        // case clanActions.LOAD_CLAN_SUCCESS: {
        //     const clan: Clan = action.payload;
        //     const entities = {
        //         ...state.entities,
        //         [clan.groupId]: clan
        //     };

        //     return {
        //         ...state,
        //         entities
        //     };
        // }
    }
    return state;
}
