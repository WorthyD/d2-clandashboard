import { ActivationEnd, Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, merge, of } from 'rxjs';
import { tap, withLatestFrom, distinctUntilChanged, filter } from 'rxjs/operators';

import { selectSettingsState } from './settings.selectors';
import { LocalStorageService } from '../../core/services/local-storage.service';

import { actionSettingsChangeTheme, actionSettingsChangeClan } from './settings.actions';

import { selectEffectiveTheme } from './settings.selectors';
import { State } from './settings.model';

export const SETTINGS_KEY = 'settings';

const INIT = of('destiny-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService
  ) {}

  // hour = 0;
  // changeHour = this.ngZone.runOutsideAngular(() =>
  //   setInterval(() => {
  //     const hour = new Date().getHours();
  //     if (hour !== this.hour) {
  //       this.hour = hour;
  //       this.ngZone.run(() =>
  //         this.store.dispatch(actionSettingsChangeHour({ hour }))
  //       );
  //     }
  //   }, 60_000)
  // );

  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeTheme, actionSettingsChangeClan),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) => this.localStorageService.setItem(SETTINGS_KEY, settings))
      ),
    { dispatch: false }
  );

  // updateRouteAnimationType = createEffect(
  //   () =>
  //     merge(
  //       INIT,
  //       this.actions$.pipe(
  //         ofType(
  //           actionSettingsChangeAnimationsElements,
  //           actionSettingsChangeAnimationsPage
  //         )
  //       )
  //     ).pipe(
  //       withLatestFrom(
  //         combineLatest([
  //           this.store.pipe(select(selectPageAnimations)),
  //           this.store.pipe(select(selectElementsAnimations))
  //         ])
  //       ),
  //       tap(([action, [pageAnimations, elementsAnimations]]) =>
  //         this.animationsService.updateRouteAnimationType(
  //           pageAnimations,
  //           elementsAnimations
  //         )
  //       )
  //     ),
  //   { dispatch: false }
  // );

  updateTheme = createEffect(
    () =>
      merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectEffectiveTheme))),
        tap(([action, effectiveTheme]) => {
          const classList = this.overlayContainer.getContainerElement().classList;
          const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  );

  // setTranslateServiceLanguage = createEffect(
  //   () =>
  //     this.store.pipe(
  //       select(selectSettingsLanguage),
  //       distinctUntilChanged(),
  //       tap((language) => this.translateService.use(language))
  //     ),
  //   { dispatch: false }
  // );

  // setTitle = createEffect(
  //   () =>
  //     merge(
  //       this.actions$.pipe(ofType(actionSettingsChangeLanguage)),
  //       this.router.events.pipe(
  //         filter((event) => event instanceof ActivationEnd)
  //       )
  //     ).pipe(
  //       tap(() => {
  //         this.titleService.setTitle(
  //           this.router.routerState.snapshot.root,
  //           this.translateService
  //         );
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
