import { createReducer, on } from '@ngrx/store';
import * as clanMemberState from './clan-members.state';
import * as clanMemberActions from './clan-members.actions';

export const ClanMemberReducer = createReducer(
    clanMemberState.ClanMemberInitialState,
    on(clanMemberActions.loadClanMembers, state => ({
        ...state,
        loading: true
    })),
    on(clanMemberActions.loadClanMembersSuccess, (state, { clanMembers }) => {
        return clanMemberState.ClanMemberAdapter.addAll(clanMembers, { ...state, loaded: true, loading: false });
   })
);
