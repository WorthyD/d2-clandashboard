import * as assert from 'assert';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { TestScheduler } from 'rxjs/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { NgZone } from '@angular/core';

import { LoadedClanEffects, LOADED_CLANS_KEY } from './loaded-clans.effects';
import { LoadedClansState } from './loaded-clans.state';
import { ClanSearchState } from '../clan-search.state';
import { addClan } from './loaded-clans.actions';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

const scheduler = new TestScheduler((actual, expected) => assert.deepStrictEqual(actual, expected));

describe('SettingsEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let store: jasmine.SpyObj<Store<ClanSearchState>>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['setItem']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  it('should call methods on LocalStorageService for PERSIST action', () => {
    scheduler.run((helpers) => {
      const { cold } = helpers;

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

      store.pipe.and.returnValue(of(orgState));

      const persistAction = addClan({ clan: { id: 3, name: 'Clan3' } });

      const source = cold('a', { a: persistAction });
      const actions = new Actions(source);
      const effect = new LoadedClanEffects(
        actions,
        store,
        localStorageService,
      );

      effect.persistClans.subscribe(() => {
        expect(localStorageService.setItem).toHaveBeenCalledWith(LOADED_CLANS_KEY, orgState);
      });
    });
  });
});
