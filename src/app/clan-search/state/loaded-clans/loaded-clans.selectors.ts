import { createSelector } from '@ngrx/store';
import { getClanSearchState } from '../clan-search.selectors';

import { LoadedClansAdapter } from './loaded-clans.state';

export const getLoadedClansEntityState = createSelector(getClanSearchState, (state) => state.loadedClans);

export const { selectIds, selectEntities, selectAll, selectTotal } = LoadedClansAdapter.getSelectors(
  getLoadedClansEntityState
);
