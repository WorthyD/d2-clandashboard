import { createReducer, on } from '@ngrx/store';
import { RaidInitialState, RaidAdapter } from './raid.state';
//import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';
import { loadRaids, loadRaidSuccess, loadRaidFailure, loadRaidGroupSuccess } from './raid.actions';

export const RaidReducer = createReducer(
  RaidInitialState,
  on(loadRaids, (state) => ({
    ...state,
    loading: true
  })),
  on(loadRaidSuccess, (state, { raidStats }) => {
    //return RaidAdapter.addAll(raidStats, { ...state, loaded: true, loading: false });
    return { ...state, loaded: true };
    //return RaidAdapter.addAll(raidStats, { ...state, loaded: true, loading: false });
  }),
  on(loadRaidGroupSuccess, (state, { raidStats }) => {
    return RaidAdapter.upsertMany(raidStats, { ...state, loading: true });
  }),
  on(loadRaidFailure, (state) => {
    return { ...state };
  })
);
