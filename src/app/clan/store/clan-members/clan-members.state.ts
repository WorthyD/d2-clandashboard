// import {ClanDetails} from 'bungie-models';
import { ClanMember } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ClanMemberState extends EntityState<ClanMember> {
    loaded: boolean;
    loading: boolean;
}

export const ClanMemberAdapter: EntityAdapter<ClanMember> = createEntityAdapter<ClanMember>({
    selectId: (cm: ClanMember) => cm.destinyUserInfo.membershipId,
    sortComparer: false
});

export const ClanMemberInitialState: ClanMemberState = ClanMemberAdapter.getInitialState({
    loaded: false,
    loading: false
});
