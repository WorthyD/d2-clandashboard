// import {ClanDetails} from 'bungie-models';
import { MemberActivityStat, MemberActivityStats } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface MemberRecentActivityStatState extends EntityState<MemberActivityStats> {
    loaded: boolean;
    loading: boolean;
}

export const MemberRecentActivityStatAdapter: EntityAdapter<MemberActivityStats> = createEntityAdapter<MemberActivityStats>({
    selectId: (cm: MemberActivityStats) => cm.id,
    sortComparer: false
});

export const MemberActivityStatInitialState: MemberRecentActivityStatState = MemberRecentActivityStatAdapter.getInitialState({
    loaded: true,
    loading: false
});
