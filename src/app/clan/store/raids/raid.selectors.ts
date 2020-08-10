import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as sealState from './seal.state';

export const getRaidEntityState = createSelector(getClanState, (state) => state.seals);

export const {
  selectIds: getMemberIds,
  selectEntities: getRaidEntities,
  selectAll: getAllRaidStats,
  selectTotal: getTotal
} = sealState.SealProfileAdapter.getSelectors(getRaidEntityState);

export const getClanSealLoading = createSelector(getRaidEntityState, (s) => s.loading);
