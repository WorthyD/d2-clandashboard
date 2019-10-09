// import { ClanDetailState } from './clan-detail.state';
 import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.state';
import * as clanMemberState from './clan-members.state';

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

export const getClanMemberEntityState = createSelector(
    getClanState,
    state => state.clanMembers
);

export const {
    selectIds: getMemberIds,
    selectEntities: getClanMemberEntities,
    selectAll: getAllMembers,
    selectTotal: getTotalMembers
} = clanMemberState.ClanMemberAdapter.getSelectors(getClanMemberEntityState);
