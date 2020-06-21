import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// import {selectRouter} from './router/router.selectors';
import * as routerStore from '@ngrx/router-store';

import {
    RouterReducerState,
    SerializedRouterStateSnapshot
} from '@ngrx/router-store';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';

export interface RootState {
    router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const metaReducers: MetaReducer<RootState>[] = [
  initStateFromLocalStorage
];


export const reducers: ActionReducerMap<RootState> = {
    router: routerStore.routerReducer
};
