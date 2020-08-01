// import { createReducer, on } from '@ngrx/store';

// import * as clanCacheState from './clan-cache.state';
// import * as clanCacheActions from './clan-cache.actions';

// export const ClanCacheReducer = createReducer(
//     clanCacheState.ClanCachedDetailsInitialState,
//     on(clanCacheActions.loadCache, (state, { caches }) => {
//         return clanCacheState.ClanCacheDetailsAdapter.addAll(caches, {
//             ...state,
//             loaded: true
//         });
//     }),
//     on(clanCacheActions.updateCache, (state, { cache }) => {
//         return clanCacheState.ClanCacheDetailsAdapter.upsertOne(cache, {
//             ...state
//         });
//     })
// );
