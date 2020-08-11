import { SealMembers, MemberRaidStats } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {} from '@destiny/data';

export interface RaidState extends EntityState<MemberRaidStats> {
  loaded: boolean;
  loading: boolean;
}

export const RaidAdapter: EntityAdapter<MemberRaidStats> = createEntityAdapter<MemberRaidStats>({
  selectId: (cm: MemberRaidStats) => cm.memberProfile.profile.data.userInfo.membershipId,
  sortComparer: false
});

export const RaidInitialState: RaidState = RaidAdapter.getInitialState({
  loaded: false,
  loading: false
});
