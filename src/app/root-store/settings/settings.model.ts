import { RootState } from '../root-store.state';

//export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br' | 'he';

export interface SettingsState {
  //language: string;
  selectedClanId: number;
  theme: string;
  // autoNightMode: boolean;
  // nightTheme: string;
  // stickyHeader: boolean;
  // pageAnimations: boolean;
  // pageAnimationsDisabled: boolean;
  // elementsAnimations: boolean;
  // hour: number;
}

export interface State extends RootState {
  settings: SettingsState;
}
