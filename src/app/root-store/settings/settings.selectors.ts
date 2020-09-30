import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { RootState } from '../root-store.state';

export const selectSettingsState = createFeatureSelector<RootState, SettingsState>('settings');

export const selectSettings = createSelector(selectSettingsState, (state: SettingsState) => state);

// export const selectSettingsStickyHeader = createSelector(
//   selectSettings,
//   (state: SettingsState) => state.stickyHeader
// );

// export const selectSettingsLanguage = createSelector(
//   selectSettings,
//   (state: SettingsState) => state.language
// );

export const selectTheme = createSelector(selectSettings, (settings) => settings.theme);
export const selectSelectedClanId = createSelector(selectSettings, (settings) => settings.selectedClan);

// export const selectPageAnimations = createSelector(
//   selectSettings,
//   (settings) => settings.pageAnimations
// );

// export const selectElementsAnimations = createSelector(
//   selectSettings,
//   (settings) => settings.elementsAnimations
// );

// export const selectAutoNightMode = createSelector(
//   selectSettings,
//   (settings) => settings.autoNightMode
// );

// export const selectNightTheme = createSelector(
//   selectSettings,
//   (settings) => settings.nightTheme
// );

// export const selectHour = createSelector(
//   selectSettings,
//   (settings) => settings.hour
// );

// export const selectIsNightHour = createSelector(
//   selectAutoNightMode,
//   selectHour,
//   (autoNightMode, hour) => autoNightMode && (hour >= 21 || hour <= 7)
// );

export const selectEffectiveTheme = createSelector(selectTheme, (theme) => theme.toLowerCase());
