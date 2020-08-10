import { SealMembers, MemberRaidStats } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {} from '@destiny/data';

export interface RaidState extends EntityState<MemberRaidStats> {
  loaded: boolean;
  loading: boolean;
}

export const SealProfileAdapter: EntityAdapter<MemberRaidStats> = createEntityAdapter<MemberRaidStats>({
  selectId: (cm: MemberRaidStats) => cm.memberProfile.profile.data.userInfo.membershipId,
  sortComparer: false
});

export const SealInitialState: RaidState = SealProfileAdapter.getInitialState({
  loaded: false,
  loading: false
});
