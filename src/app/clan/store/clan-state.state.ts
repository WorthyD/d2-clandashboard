import * as clanDetailState from './clan-detail/clan-detail.state';
import * as clanDetailReducers from './clan-detail/clan-detail.reducers';

import * as clanMemberState from './clan-members/clan-members.state';
import * as clanMemberReducer from './clan-members/clan-members.reducers';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ClanDetailEffects } from './clan-detail/clan-detail.effects';
import { ClanMemberEffects } from './clan-members/clan-members.effects';

import { ClanIdReducer } from './clan-id/clan-id.reducer';

import { MemberProfileEffects } from './member-profiles/member-profiles.effects';
import * as memberProfileState from './member-profiles/member-profiles.state';
import * as memberProfileReducer from './member-profiles/member-profiles.reducers';

import { MemberStatEffects } from './member-activities/member-activities.effects';
import * as memberActivityState from './member-activities/member-activities.state';
import * as memberActivityReducer from './member-activities/member-activities.reducers';

import * as clanCacheState from './clan-cache/clan-cache.state';
import * as clanCacheReducer from './clan-cache/clan-cache.reducers';
import { ClanCacheEffects } from './clan-cache/clan-cache.effects';

import * as clanRewardState from './clan-rewards/clan-rewards.state';
import * as clanRewardReducer from './clan-rewards/clan-rewards.reducers';
import { ClanRewardEffects } from './clan-rewards/clan-rewards.effects';

export interface ClanState {
    clanId: number;
    clanDetails: clanDetailState.ClanDetailState;
    clanMembers: clanMemberState.ClanMemberState;
    clanRewards: clanRewardState.ClanRewardState;
    memberProfiles: memberProfileState.MemberProfileState;
    memberActivities: memberActivityState.MemberActivityStatState;
    clanCache: clanCacheState.CacheDetailState;
}

export const reducers: ActionReducerMap<ClanState> = {
    clanId: ClanIdReducer,
    clanDetails: clanDetailReducers.ClanDetailReducer,
    clanRewards: clanRewardReducer.ClanRewardReducer,
    clanMembers: clanMemberReducer.ClanMemberReducer,
    memberProfiles: memberProfileReducer.MemberProfileReducer,
    memberActivities: memberActivityReducer.MemberProfileReducer,
    clanCache: clanCacheReducer.ClanCacheReducer
};

export const ClanEffects = [
    ClanDetailEffects,
    ClanMemberEffects,
    MemberProfileEffects,
    MemberStatEffects,
    ClanCacheEffects,
    ClanRewardEffects
];
// export const ClanEffects = [ClanDetailEffects, ClanMemberEffects];
