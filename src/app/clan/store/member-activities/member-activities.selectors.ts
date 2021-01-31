import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as memberActivityStatState from './member-activities.state';
import { getSelectedClanMemberId } from '../clan-members/clan-members.selectors';

export const getMemberProfileEntityState = createSelector(getClanState, (state) => state.memberActivities);

export const {
  selectIds: getMemberIds,
  selectEntities: getMemberProfileEntities,
  selectAll: getAllMembers,
  selectTotal: getTotalMembers
} = memberActivityStatState.MemberActivityStatAdapter.getSelectors(getMemberProfileEntityState);

export const getClanMemberById = (memberId) =>
  createSelector(getMemberProfileEntities, (entities) => {
    return memberId && entities[memberId];
  });

export const getClanMemberActivities = (memberId) =>
  createSelector(getClanMemberById(memberId), (activities) => {
    return activities && activities.activities;
  });

export const getSelectedClanMemberActivities = createSelector(
  getSelectedClanMemberId,
  getMemberProfileEntities,
  (memberId, entities) => {
    return memberId && entities[memberId] && entities[memberId].activities;
  }
);
export const getClanMemberActivitiesLoading = createSelector(getMemberProfileEntityState, (state) => state.loading);
export const getClanMemberActivitiesLoaded = createSelector(getMemberProfileEntityState, (state) => state.loaded);

export const getClanMemberActivitiesUpdating = createSelector(getMemberProfileEntityState, (state) => state.updating);
