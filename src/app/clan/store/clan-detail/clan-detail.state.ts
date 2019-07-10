import { Clan } from 'bungie-parse';

export interface ClanDetailState {
  entities: { [id: number]: Clan };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ClanDetailState = {
  entities: [],
  loaded: false,
  loading: false
};
