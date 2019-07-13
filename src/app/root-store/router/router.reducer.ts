// import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
// import * as routerStore from '@ngrx/router-store';

// export interface IRouterStateUrl {
//     url: string;
//     queryParams: Params;
//     params: Params;
// }

// export interface State {
//     routerReducer: routerStore.RouterReducerState<IRouterStateUrl>;
// }

// export class CustomSerializer implements routerStore.RouterStateSerializer<IRouterStateUrl> {
//     serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
//         const { url } = routerState;
//         const { queryParams } = routerState.root;

//         let state: ActivatedRouteSnapshot = routerState.root;
//         while (state.firstChild) {
//             state = state.firstChild;
//         }

//         const { params } = state;

//         return { url, queryParams, params };
//     }
// }
