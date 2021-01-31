import { createReducer, on } from '@ngrx/store';
import * as MemberActivityState from './member-activities.state';
import * as MemberActivityActions from './member-activities.actions';

export const MemberProfileReducer = createReducer(
  MemberActivityState.MemberActivityStatInitialState,
  on(MemberActivityActions.loadMemberActivities, (state) => ({
    ...state,
    loading: true
  })),
  on(MemberActivityActions.refreshMemberActivities, (state, { member }) => {
    return {
      ...state,
      updating: true
    };
  }),
  on(MemberActivityActions.refreshMemberActivitiesComplete, (state, { memberActivities }) => {
    return MemberActivityState.MemberActivityStatAdapter.upsertMany(memberActivities, {
      ...state,
      updating: true
    });
  }),

  on(MemberActivityActions.loadMemberActivitiesSuccess, (state, { memberActivities }) => {
    return MemberActivityState.MemberActivityStatAdapter.upsertMany(memberActivities, {
      ...state,
      loaded: true,
      loading: false
    });
  })
);
