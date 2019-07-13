import { ActionReducerMap } from '@ngrx/store';

// import {selectRouter} from './router/router.selectors';
import * as routerStore from '@ngrx/router-store';

import {
    RouterReducerState,
    SerializedRouterStateSnapshot
} from '@ngrx/router-store';

export interface RootState {
    router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const reducers: ActionReducerMap<RootState> = {
    router: routerStore.routerReducer
};
