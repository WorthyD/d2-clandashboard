import { ClanSearchState } from './clan-search.state';
import { createFeatureSelector } from '@ngrx/store';

export const CLAN_SEARCH_FEATURE = 'clan-search';
export const getClanSearchState = createFeatureSelector<ClanSearchState>(CLAN_SEARCH_FEATURE);
