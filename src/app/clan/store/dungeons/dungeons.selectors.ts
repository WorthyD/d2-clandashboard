import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
import * as dungeonState from './dungeon.state';

export const getDungeonEntityState = createSelector(getClanState, (state) => state.);

export const {
  selectIds: getMemberIds,
  selectEntities: getDungeonEntities,
  selectAll: getAllDungeonStats,
  selectTotal: getTotal
} = dungeonState.DungeonAdapter.getSelectors(getDungeonEntityState);

export const getDungeonStatsLoading = createSelector(getDungeonEntityState, (s) => s.loading);
