import { createReducer, on } from '@ngrx/store';
import * as MemberActivityState from './member-recent-activities.state';
import * as MemberActivityActions from './member-recent-activities.actions';

export const MemberProfileReducer = createReducer(
  MemberActivityState.MemberActivityStatInitialState,
  on(MemberActivityActions.loadMemberActivities, (state) => ({
    ...state,
    loading: true
  })),
  // on(
  //     MemberActivityActions.loadMemberActivitiesSuccess,
  //     (state, { memberActivities }) => {
  //         return MemberActivityState.MemberActivityStatAdapter.addAll(
  //             memberActivities,
  //             { ...state, loaded: true, loading: false }
  //         );
  //     }
  // ),
  on(MemberActivityActions.loadMemberRecentActivitiesSuccess, (state, { memberActivities }) => {
    return MemberActivityState.MemberRecentActivityStatAdapter.upsertOne(memberActivities, {
      ...state,
      loaded: true,
      loading: false
    });
  })
);
