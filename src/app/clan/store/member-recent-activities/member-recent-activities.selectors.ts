// // import { createFeatureSelector, createSelector } from '@ngrx/store';

// // import { getClanState } from '../clan-state.selector';
// // import * as memberActivityStatState from './member-recent-activities.state';
// // import { getSelectedClanMemberId } from '../clan-members/clan-members.selectors';

// // export const getMemberProfileEntityState = createSelector(getClanState, (state) => state.memberRecentActivities);

// // export const {
// //   selectIds: getMemberIds,
// //   selectEntities: getMemberActivityEntities,
// //   selectAll: getAllMemberActivities,
// //   selectTotal: getTotalMemberActivities
// // } = memberActivityStatState.MemberRecentActivityStatAdapter.getSelectors(getMemberProfileEntityState);

// /*
// export const getClanMemberById = (memberId) =>
//   createSelector(getMemberActivityEntities, (entities) => {
//     return memberId && entities[memberId];
//   });


// export const getClanMemberActivities = (memberId) =>
//   createSelector(getClanMemberById(memberId), (activities) => {
//     return activities && activities.activities;
//   });

// export const getSelectedClanMemberActivities = createSelector(
//   getSelectedClanMemberId,
//   getMemberActivityEntities,
//   (memberId, entities) => {
//     return memberId && entities[memberId] && entities[memberId].activities;
//   }
// );
// */
// export const getClanMemberActivitiesLoading = createSelector(getMemberProfileEntityState, (state) => state.loading);
