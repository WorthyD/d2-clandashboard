import { createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';
//import { MemberActivityAllStatState } from './member-activities-all.state';

export const getMemberProfileEntityState = createSelector(getClanState, (state) => state.memberActivities);
