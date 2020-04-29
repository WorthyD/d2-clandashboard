import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as memberProfileState from './member-profiles.state';

export const getMemberProfileEntityState = createSelector(
    getClanState,
    state => state.memberProfiles
);

export const {
    selectIds: getMemberIds,
    selectEntities: getMemberProfileEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers
} = memberProfileState.MemberProfileAdapter.getSelectors(
    getMemberProfileEntityState
);

export const getClanMemberById = memberId =>
    createSelector(getMemberProfileEntities, entities => {
        console.log('selecting member');
        return memberId && entities[memberId];
    });

