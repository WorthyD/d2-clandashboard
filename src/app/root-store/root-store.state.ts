import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// import {selectRouter} from './router/router.selectors';
import * as routerStore from '@ngrx/router-store';
import { SettingsState } from './settings/settings.model';
import { settingsReducer } from './settings/settings.reducer';

import { RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';

export interface RootState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
  settings: SettingsState;
}

export const metaReducers: MetaReducer<RootState>[] = [initStateFromLocalStorage];

export const reducers: ActionReducerMap<RootState> = {
  router: routerStore.routerReducer,
  settings: settingsReducer
};
