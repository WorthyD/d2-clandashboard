import * as clanDetailState from './clan-detail/clan-detail.state';
import * as clanDetailReducers from './clan-detail/clan-detail.reducers';

import * as clanMemberState from './clan-members/clan-members.state';
import * as clanMemberReducer from './clan-members/clan-members.reducers';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ClanDetailEffects } from './clan-detail/clan-detail.effects';
import { ClanMemberEffects } from './clan-members/clan-members.effects';

import {MemberProfileEffects} from './member-profiles/member-profiles.effects';
import * as memberProfileState from './member-profiles/member-profiles.state';
import * as memberProfileReducer from './member-profiles/member-profiles.reducers';

export interface ClanState {
    clanDetails: clanDetailState.ClanDetailState;
    clanMembers: clanMemberState.ClanMemberState;
    memberProfiles: memberProfileState.MemberProfileState;
}

export const reducers: ActionReducerMap<ClanState> = {
    clanDetails: clanDetailReducers.ClanDetailReducer,
    clanMembers: clanMemberReducer.ClanMemberReducer,
    memberProfiles: memberProfileReducer.MemberProfileReducer
};

export const getClanState = createFeatureSelector<ClanState>('clans');

// export const ClanEffects = [ClanDetailEffects, ClanMemberEffects, MemberProfileEffects];
export const ClanEffects = [ClanDetailEffects, ClanMemberEffects];
