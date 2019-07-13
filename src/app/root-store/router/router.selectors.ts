import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export interface State {
    router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
    State,
    fromRouter.RouterReducerState<any>
>('router');

const {
    selectQueryParams, // select the current route query params
    selectRouteParams, // select the current route params
    selectRouteData, // select the current route data
    selectUrl // select the current url
} = getSelectors(selectRouter);
