// // import {ClanDetails} from 'bungie-models';
import { MemberActivityStat, MemberActivityStats, MemberActivityTime } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface MemberActivityStatState extends EntityState<MemberActivityTime> {
  loaded: boolean;
  loading: boolean;
  updating: boolean;
}

export const MemberActivityStatAdapter: EntityAdapter<MemberActivityTime> = createEntityAdapter<MemberActivityTime>({
  selectId: (cm: MemberActivityTime) => cm.id,
  sortComparer: false
});

export const MemberActivityStatInitialState: MemberActivityStatState = MemberActivityStatAdapter.getInitialState({
  loaded: false,
  loading: false,
  updating: false
});
