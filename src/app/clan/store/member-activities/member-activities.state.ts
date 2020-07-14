// import {ClanDetails} from 'bungie-models';
import { MemberActivityStat, MemberActivityStats } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface MemberActivityStatState extends EntityState<MemberActivityStats> {
    loaded: boolean;
    loading: boolean;
}

export const MemberActivityStatAdapter: EntityAdapter<MemberActivityStats> = createEntityAdapter<MemberActivityStats>({
    selectId: (cm: MemberActivityStats) => cm.id,
    sortComparer: false
});

export const MemberActivityStatInitialState: MemberActivityStatState = MemberActivityStatAdapter.getInitialState({
    loaded: false,
    loading: false
});
