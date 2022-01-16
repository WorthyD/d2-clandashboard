import { createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';

export const getMemberProfileEntityState = createSelector(getClanState, (state) => state.memberActivities);
