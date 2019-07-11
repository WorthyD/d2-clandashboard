import * as clanDetailState from './clan-detail/clan-detail.state';
import * as clanDetailReducers from './clan-detail/clan-detail.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface ClanState{
    clanDetails: clanDetailState.ClanDetailState;
}

export const reducers: ActionReducerMap<ClanState> = {
    clanDetails: clanDetailReducers.ClanDetailReducer
}

export const getClanState = createFeatureSelector<ClanState>('clans');
