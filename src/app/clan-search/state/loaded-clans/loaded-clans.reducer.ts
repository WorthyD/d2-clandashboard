import { createReducer, on } from '@ngrx/store';
import { LoadedClanInitialState, LoadedClansAdapter } from './loaded-clans.state';
import { addClan } from './loaded-clans.actions';

const reducer = createReducer(
  LoadedClanInitialState,
  on(addClan, (state, { clan }) => {
    return LoadedClansAdapter.addOne(clan, { ...state });
  })
);
