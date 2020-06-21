import { addClan } from './loaded-clans.actions';
import { LoadedClanInitialState, LoadedClansState } from './loaded-clans.state';
import { LoadedClanReducer } from './loaded-clans.reducer';

const orgState: LoadedClansState = {
  ids: [1],
  entities: {
    1: {
      id: 1,
      name: 'Clan1'
    }
  }
};

describe('Loaded Clans Reducer', () => {
  describe('undefined action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const state = LoadedClanReducer(undefined, action);
      expect(state).toBe(LoadedClanInitialState);
    });
    it('should return original state', () => {
      const action = {} as any;
      const state = LoadedClanReducer(orgState, action);
      expect(state).toBe(orgState);
    });
  });

  describe('add clan', () => {
    it('should add clan', () => {
      const newClan = { id: 5, name: 'Clan 1' };
      const action = addClan({ clan: newClan });

      const state = LoadedClanReducer(undefined, action);

      expect(state.ids).toEqual([5]);
      expect(state.entities[5]).toEqual(newClan);
    });
  });
});
