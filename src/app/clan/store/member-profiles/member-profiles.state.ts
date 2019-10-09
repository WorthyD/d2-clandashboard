// import {ClanDetails} from 'bungie-models';
import { MemberProfile } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface MemberProfileState extends EntityState<MemberProfile> {
    loaded: boolean;
    loading: boolean;
}

export const MemberProfileAdapter: EntityAdapter<MemberProfile> = createEntityAdapter<MemberProfile>({
    selectId: (cm: MemberProfile) => cm.profile.data.userInfo.membershipId,
    sortComparer: false
});

export const MemberProfileInitialState: MemberProfileState = MemberProfileAdapter.getInitialState({
    loaded: false,
    loading: false
});
