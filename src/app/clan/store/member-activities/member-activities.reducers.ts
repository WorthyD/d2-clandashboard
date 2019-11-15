import { createReducer, on } from '@ngrx/store';
import * as MemberActivityState from './member-activities.state';
import * as MemberActivityActions from './member-activities.actions';


export const MemberProfileReducer = createReducer(
    MemberActivityState.MemberActivityStatInitialState,
    on(MemberActivityActions.loadMemberActivities, state => ({
        ...state,
        loading: true
    })),
    on(
        MemberActivityActions.loadMemberActivitiesuccess,
        (state, { memberActivities }) => {
            return MemberActivityState.MemberActivityStatAdapter.upsertOne(
                memberActivities,
                { ...state, loaded: true, loading: false }
            );
        }
    ),
    on(
        MemberActivityActions.loadMemberActivitiesFromAPI,
        (state, { memberActivities }) => {
            return MemberActivityState.MemberActivityStatAdapter.upsertOne(
                memberActivities,
                { ...state, loaded: true, loading: false }
            );
        }
    )
);
