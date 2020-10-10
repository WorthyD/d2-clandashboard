import { createReducer, on } from '@ngrx/store';
import { RaidInitialState, RaidAdapter } from './dungeon.state';
//import { loadSeals, loadSealSuccess, loadSealFailure } from './seal.actions';
import { loadRaids, loadRaidSuccess, loadRaidFailure } from './dungeon.actions';

export const RaidReducer = createReducer(
  RaidInitialState,
  on(loadRaids, (state) => ({
    ...state,
    loading: true
  })),
  on(loadRaidSuccess, (state, { raidStats }) => {
    return RaidAdapter.addAll(raidStats, { ...state, loaded: true, loading: false });
  }),
  on(loadRaidFailure, (state) => {
    return { ...state };
  })
);
