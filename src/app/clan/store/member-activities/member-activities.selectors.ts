 import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as memberActivityStatState from './member-activities.state';

export const getMemberProfileEntityState = createSelector(
    getClanState,
    state => state.memberProfiles
);

export const {
    selectIds: getMemberIds,
    selectEntities: getMemberProfileEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers
} = memberActivityStatState.MemberActivityStatAdapter.getSelectors(getMemberProfileEntityState);

export const getClanMemberById = memberId =>
    createSelector(
        getMemberProfileEntities,
        entities => {
            return memberId && entities[memberId];
        }
    );

