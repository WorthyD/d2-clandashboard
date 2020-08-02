import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as clanMemberState from './clan-members.state';

export const getClanMemberEntityState = createSelector(getClanState, (state) => state.clanMembers);

export const {
    selectIds: getMemberIds,
    selectEntities: getClanMemberEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers,
} = clanMemberState.ClanMemberAdapter.getSelectors(getClanMemberEntityState);

export const getClanMemberById = (memberId) =>
    createSelector(getClanMemberEntities, (entities) => {
        return memberId && entities[memberId];
    });

export const getSelectedClanMemberId = createSelector(
    getClanMemberEntityState,
    (state) => state.selectedMemberId
);

export const getIsMembersLoaded = createSelector(
    getClanMemberEntityState,
    (state) => state.loaded
);

export const getSelectedClanMember = createSelector(
    getSelectedClanMemberId,
    getClanMemberEntities,
    (state, entities) => {
        return state && entities[state];
    }
);
