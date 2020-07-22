import { createReducer, on } from '@ngrx/store';
//import * as MemberProfileState from './member-profiles.state';
// import * as MemberProfileActions from './member-profiles.actions';
import { SealInitialState, SealProfileAdapter } from './seal.state';
import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';

export const MemberProfileReducer = createReducer(
  SealInitialState,
  on(loadSeals, (state) => ({
    ...state,
    loading: true
  })),
  on(loadSealSuccess, (state, { sealMembers }) => {
    return SealProfileAdapter.addAll(sealMembers, { ...state, loaded: true, loading: false });
    //return { ...state, loaded: true, loading: false };
  }),
  on(loadSealFailure, (state) => {
    return { ...state };
  })
);
