import { createReducer, on } from '@ngrx/store';
import * as MemberActivityState from './member-activities-all.state';
import * as MemberActivityActions from './member-activities-all.actions';

export const MemberActivitiesAllReducer = createReducer(
  MemberActivityState.initialMemberActivityAllState,
  on(MemberActivityActions.loadClanMembersActivities, (state) => {
    return { ...state, loaded: true };
  }),
  on(MemberActivityActions.refreshMemberAllActivities, (state, { member }) => {
    return {
      ...state,
      updating: true
    };
  }),
  on(MemberActivityActions.refreshMemberAllActivitiesComplete, (state, { memberActivities }) => {
    return {
      ...state,
      updating: false,
      loaded: true
    };
  })
);
