import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';

export const getClanIdState = createSelector(
    getClanState,
    s => s.clanId
);
