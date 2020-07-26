import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as sealState from './seal.state';

export const getSealEntityState = createSelector(getClanState, (state) => state.seals);

export const {
  selectIds: getMemberIds,
  selectEntities: getMemberProfileEntities,
  selectAll: getAllSeals,
  selectTotal: getTotalMembers
} = sealState.SealProfileAdapter.getSelectors(getSealEntityState);

export const getClanSealLoading = createSelector(getSealEntityState, (s) => s.loading);
