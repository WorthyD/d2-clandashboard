import { ClanDetailState } from './clan-detail.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as rootState from '../../../root-store/router/reducer';

import {getClanState} from '../clan-state.state';
import { Clan } from 'bungie-parse';

export const getClanDetailState = createSelector(
    getClanState,
    s => s.clanDetails
);

export const getClanDetailEntities = createSelector(
    getClanDetailState,
    s => s.entities
)

export const getSelectedClanDetail = createSelector(
    getClanDetailEntities,
    rootState.selectReducerState,
    (entities, router): Clan =>{
        return router.state && entities[router.state.params.clanId];
    }
);
