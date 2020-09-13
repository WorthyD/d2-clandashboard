import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {LoadedClan} from '../../models/loaded-clan';

// export interface LoadedClans {
//   ClanName: string;
//   ClanId: number;
// }

export interface LoadedClansState extends EntityState<LoadedClan> {}

export const LoadedClansAdapter: EntityAdapter<LoadedClan> = createEntityAdapter<LoadedClan>({
  selectId: (lc: LoadedClan) => lc.id,
  sortComparer: false,
});

export const LoadedClanInitialState: LoadedClansState = LoadedClansAdapter.getInitialState({});
