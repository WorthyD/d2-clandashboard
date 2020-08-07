import { createReducer, on } from '@ngrx/store';
import { SealInitialState, SealProfileAdapter } from './seal.state';
import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';

export const SealReducer = createReducer(
  SealInitialState,
  on(loadSeals, (state) => ({
    ...state,
    loading: true
  })),
  on(loadSealSuccess, (state, { sealMembers }) => {
    return SealProfileAdapter.addAll(sealMembers, { ...state, loaded: true, loading: false });
  }),
  on(loadSealFailure, (state) => {
    return { ...state };
  })
);
