import { LoadedClansState } from './loaded-clans/loaded-clans.state';
import { ActionReducerMap } from '@ngrx/store';
import { LoadedClanReducer } from './loaded-clans/loaded-clans.reducer';
import { LoadedClanEffects } from './loaded-clans/loaded-clans.effects';

export interface ClanSearchState {
  loadedClans: LoadedClansState;
}

export const reducers: ActionReducerMap<ClanSearchState> = {
  loadedClans: LoadedClanReducer
};

export const ClanSearchEffects = [LoadedClanEffects];
