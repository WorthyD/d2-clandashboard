// import {ClanDetails} from 'bungie-models';
import { ClanMember } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { getClanMemberId } from '@destiny/data';

export interface ClanMemberState extends EntityState<ClanMember> {
    loaded: boolean;
    loading: boolean;
    selectedMemberId: string;
}

export const ClanMemberAdapter: EntityAdapter<ClanMember> = createEntityAdapter<ClanMember>({
    selectId: (cm: ClanMember) => getClanMemberId(cm),
    sortComparer: false
});

export const ClanMemberInitialState: ClanMemberState = ClanMemberAdapter.getInitialState({
    loaded: false,
    loading: false,
    selectedMemberId: null
});
