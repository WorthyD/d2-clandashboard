import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as raidState from './raid.state';

export const getRaidEntityState = createSelector(getClanState, (state) => state.raidStats);

export const {
  selectIds: getMemberIds,
  selectEntities: getRaidEntities,
  selectAll: getAllRaidStats,
  selectTotal: getTotal
} = raidState.RaidAdapter.getSelectors(getRaidEntityState);

export const getRaidStatsLoading = createSelector(getRaidEntityState, (s) => s.loading);
