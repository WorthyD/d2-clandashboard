import { LoadedClansState } from './loaded-clans/loaded-clans.state';
import { ActionReducerMap } from '@ngrx/store';

export interface ClanSearchState {
  loadedClans: LoadedClansState;
}

export const reducers: ActionReducerMap<ClanSearchState> = {
  loadedClans: null
};

export const ClanSearchEffects = [];
