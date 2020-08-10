import { createReducer, on } from '@ngrx/store';
import { SealInitialState, SealProfileAdapter } from './seal.state';
//import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';
import { loadRaids, loadRaidSuccess, loadRaidFailure } from './raid.actions';

export const SealReducer = createReducer(
  SealInitialState,
  on(loadRaids, (state) => ({
    ...state,
    loading: true
  })),
  on(loadRaidSuccess, (state, { raidStats }) => {
    return SealProfileAdapter.addAll(raidStats, { ...state, loaded: true, loading: false });
  }),
  on(loadRaidFailure, (state) => {
    return { ...state };
  })
);
