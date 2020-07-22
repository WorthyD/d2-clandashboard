// import {ClanDetails} from 'bungie-models';
import { MemberProfile, SealMembers } from 'bungie-models';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { getMemberProfileId } from '@destiny/data';



export interface SealState extends EntityState<SealMembers> {
  loaded: boolean;
  loading: boolean;
}

export const SealProfileAdapter: EntityAdapter<SealMembers> = createEntityAdapter<SealMembers>({
  selectId: (cm: SealMembers) => cm.seal.hash,
  sortComparer: false
});

export const SealInitialState: SealState = SealProfileAdapter.getInitialState({
  loaded: false,
  loading: false
});
