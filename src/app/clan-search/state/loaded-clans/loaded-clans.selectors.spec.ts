import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LoadedClansState } from './loaded-clans.state';
import * as loadedClanSelectors from './loaded-clans.selectors';
import { ClanSearchState } from '../clan-search.state';
import { select } from '@ngrx/store';

const orgState: LoadedClansState = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      name: 'Clan1'
    },
    2: {
      id: 2,
      name: 'Clan2'
    }
  }
};

describe('Loaded Clan Selectors', () => {
  let store: MockStore<ClanSearchState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MockStore, provideMockStore({ initialState: { clanSearch: { loadedClans: orgState } } })]
    });

    store = TestBed.inject(MockStore);
  });
  it('should SelectIds', () => {
    store.pipe(select(loadedClanSelectors.selectIds)).subscribe((x) => {
      expect(x).toEqual([1, 2]);
    });
  });
  it('should select entities', () => {
    store.pipe(select(loadedClanSelectors.selectEntities)).subscribe((x) => {
      expect(x).toEqual(orgState.entities);
    });
  });
  it('should select all ', () => {
    store.pipe(select(loadedClanSelectors.selectAll)).subscribe((x) => {
      expect(x).toEqual(Object.values(orgState.entities));
    });
  });
  it('should select total ', () => {
    store.pipe(select(loadedClanSelectors.selectTotal)).subscribe((x) => {
      expect(x).toEqual(orgState.ids.length);
    });
  });
});
