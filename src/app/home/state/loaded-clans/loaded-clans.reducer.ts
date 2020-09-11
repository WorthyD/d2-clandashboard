import { createReducer, on, Action } from '@ngrx/store';
import { LoadedClanInitialState, LoadedClansAdapter, LoadedClansState } from './loaded-clans.state';
import { addClan } from './loaded-clans.actions';

const reducer = createReducer(
  LoadedClanInitialState,
  on(addClan, (state, { clan }) => {
    return LoadedClansAdapter.addOne(clan, { ...state });
  })
);

export function LoadedClanReducer(state: LoadedClansState | undefined, action: Action) {
  return reducer(state, action);
}
