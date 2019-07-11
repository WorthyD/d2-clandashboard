import { Params, RouterStateSnapshot } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';
import { Injectable } from '@angular/core';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

// Reducer selectors
export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');
export const getRouterInfo = createSelector(
  selectReducerState,
  state => state.state
);

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
