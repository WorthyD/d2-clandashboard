import { createReducer, on } from '@ngrx/store';
import * as MemberProfileState from './member-profiles.state';
import * as MemberProfileActions from './member-profiles.actions';

export const MemberProfileReducer = createReducer(
    MemberProfileState.MemberProfileInitialState,
    on(MemberProfileActions.loadMemberProfiles, state => ({
        ...state,
        loading: true
    })),
    on(MemberProfileActions.loadMemberProfileSuccess, (state, { memberProfile }) => {

        return MemberProfileState.MemberProfileAdapter.upsertOne(memberProfile, { ...state, loaded: true, loading: false });
   })
);
