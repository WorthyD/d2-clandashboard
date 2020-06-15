import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface LoadedClans {
  ClanName: string;
  ClanId: number;
}

export interface LoadedClansState extends EntityState<LoadedClans> {}

export const LoadedClansAdapter: EntityAdapter<LoadedClans> = createEntityAdapter<LoadedClans>({
  selectId: (lc: LoadedClans) => lc.ClanId,
  sortComparer: false,
});

export const LoadedClanInitialState: LoadedClansState = LoadedClansAdapter.getInitialState({});
