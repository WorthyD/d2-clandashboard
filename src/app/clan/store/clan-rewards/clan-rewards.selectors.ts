// import { ClanDetailState } from './clan-detail.state';
import { ClanRewardState } from './clan-rewards.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as rootState from '../../../root-store/router/router.reducer';
import * as routerState from '../../../root-store/router/router.selectors';

import { getClanState } from '../clan-state.selector';

export const getClanRewardState = createSelector(
    getClanState,
    s => s.clanRewards
);
export const getClanRewards = createSelector(
    getClanRewardState,
    s => s.clanReward
);

// export const getClanDetailEntities = createSelector(
//     getClanDetailState,
//     s => s.entities
// );

// export const getClanDetailById = (clanId: number) =>
//     createSelector(
//         getClanDetailEntities,
//         //    rootState.selectReducerState,
//         (entities): Clan => {
//             // return router.state && entities[router.state.params.clanId];
//             return entities[clanId];
//         }
//     );

/*
export const clientById = (clientId: number) =>
    createSelector(clientState, (state: IClientState) => FromEntity(state.data).find(x => x.id === clientId));
    */

// export const getSelectedClanDetail = createSelector(
//     getClanDetailEntities,
//     routerState.selectRouter,
//     //    rootState.selectReducerState,
//     (entities, router): Clan => {
//         // return router.state && entities[router.state.params.clanId];
//         return router.state && entities[router.state.params.clanId];
//     }
// );
