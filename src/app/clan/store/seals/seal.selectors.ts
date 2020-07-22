import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
//import * as memberProfileState from './member-profiles.state';
import * as sealState from './seal.state';

export const getSealEntityState = createSelector(
    getClanState,
    state => state.memberProfiles
);

export const {
    selectIds: getMemberIds,
    selectEntities: getMemberProfileEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers
} = sealState.SealProfileAdapter.getSelectors(
  getSealEntityState
);

// export const getClanMemberById = memberId =>
//     createSelector(getMemberProfileEntities, entities => {
//         return memberId && entities[memberId];
//     });

