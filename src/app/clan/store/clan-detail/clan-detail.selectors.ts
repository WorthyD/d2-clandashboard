import { ClanDetailState } from './clan-detail.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as rootState from '../../../root-store/router/router.reducer';
import * as routerState from '../../../root-store/router/router.selectors';

import { getClanState } from '../clan-state.state';
import { Clan } from 'bungie-parse';

export const getClanDetailState = createSelector(
    getClanState,
    s => s.clanDetails
);

export const getClanDetailEntities = createSelector(
    getClanDetailState,
    s => s.entities
);

export const getClanDetailById = (clanId: number) =>
    createSelector(
        getClanDetailEntities,
        //    rootState.selectReducerState,
        (entities): Clan => {
            // return router.state && entities[router.state.params.clanId];
            return entities[clanId];
        }
    );

/*
export const clientById = (clientId: number) =>
    createSelector(clientState, (state: IClientState) => FromEntity(state.data).find(x => x.id === clientId));
    */

export const getSelectedClanDetail = createSelector(
    getClanDetailEntities,
    routerState.selectRouter,
    //    rootState.selectReducerState,
    (entities, router): Clan => {
        // return router.state && entities[router.state.params.clanId];
        return router.state && entities[router.state.params.clanId];
    }
);
