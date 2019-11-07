import { createFeatureSelector } from '@ngrx/store';
import { ClanState } from './clan-state.state';
export const getClanState = createFeatureSelector<ClanState>('clan');
