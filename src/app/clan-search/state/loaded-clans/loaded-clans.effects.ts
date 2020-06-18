import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ClanSearchState } from '../clan-search.state';
import { addClan } from './loaded-clans.actions';
import { getLoadedClansEntityState } from './loaded-clans.selectors';
import { withLatestFrom, tap } from 'rxjs/operators';
export const LOADED_CLANS_KEY = 'clanSearch.loadedClans';

@Injectable()
export class LoadedClanEffects {
  constructor(
    private actions$: Actions,
    private store: Store<ClanSearchState>,
    private localStorageService: LocalStorageService
  ) {}

  persistClans = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addClan),
        withLatestFrom(this.store.pipe(select(getLoadedClansEntityState))),
        tap(([action, clans]) => this.localStorageService.setItem(LOADED_CLANS_KEY, clans))
      ),
    { dispatch: false }
  );

  /*
  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionSettingsChangeAnimationsElements,
       ),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) =>
          this.localStorageService.setItem(SETTINGS_KEY, settings)
        )
      ),
    { dispatch: false }
  );
  */
}
