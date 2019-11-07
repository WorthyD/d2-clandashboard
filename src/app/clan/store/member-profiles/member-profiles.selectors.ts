// import { ClanDetailState } from './clan-detail.state';
 import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as memberProfileState from './member-profiles.state';

// // import * as rootState from '../../../root-store/router/router.reducer';
// import * as routerState from '../../../root-store/router/router.selectors';

// import { getClanState } from '../clan-state.state';

// export const getClanDetailState = createSelector(
//     getClanState,
//     s => s.clanDetails
// );
// export const getClanDetail = createSelector(
//     getClanDetailState,
//     s => s.clan
// );

export const getMemberProfileEntityState = createSelector(
    getClanState,
    state => state.memberProfiles
);

export const {
    selectIds: getMemberIds,
    selectEntities: getMemberProfileEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers
} = memberProfileState.MemberProfileAdapter.getSelectors(getMemberProfileEntityState);
