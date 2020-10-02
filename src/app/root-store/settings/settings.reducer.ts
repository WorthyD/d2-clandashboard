import { SettingsState } from './settings.model';
import {
  // actionSettingsChangeAnimationsElements,
  // actionSettingsChangeAnimationsPage,
  // actionSettingsChangeAnimationsPageDisabled,
  // actionSettingsChangeAutoNightMode,
  // actionSettingsChangeHour,
  // actionSettingsChangeLanguage,
  // actionSettingsChangeStickyHeader,
  actionSettingsChangeTheme,
  actionSettingsChangeClan
} from './settings.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: SettingsState = {
  //  language: 'en',
  theme: 'light-theme',
  selectedClanId: 0
  // autoNightMode: false,
  // nightTheme: NIGHT_MODE_THEME,
  // stickyHeader: true,
  // pageAnimations: true,
  // pageAnimationsDisabled: false,
  // elementsAnimations: true,
  // hour: 0
};

const reducer = createReducer(
  initialState,
  on(
    //actionSettingsChangeLanguage,
    actionSettingsChangeTheme,
    actionSettingsChangeClan,
    // actionSettingsChangeAutoNightMode,
    // actionSettingsChangeStickyHeader,
    // actionSettingsChangeAnimationsPage,
    // actionSettingsChangeAnimationsElements,
    // actionSettingsChangeHour,
    (state, action) => ({ ...state, ...action })
  )
  // on(
  //   actionSettingsChangeAnimationsPageDisabled,
  //   (state, { pageAnimationsDisabled }) => ({
  //     ...state,
  //     pageAnimationsDisabled,
  //     pageAnimations: false
  //   })
  // )
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return reducer(state, action);
}
