// import { createSelector } from '@ngrx/store';
// import { getClanState } from '../clan-state.selector';
// import * as clanCacheState from './clan-cache.state';

// export const getClanCacheState = createSelector(
//     getClanState,
//     s => s.clanCache
// );
// export const {
//     selectIds: getCacheIds,
//     selectEntities: getCacheEntities,
//     selectAll: getAllCaches,
//     selectTotal: getTotalCaches
// } = clanCacheState.ClanCacheDetailsAdapter.getSelectors(getClanCacheState);

// export const cacheById = cacheId =>
//     createSelector(
//         getCacheEntities,
//         entities => {
//             return cacheId && entities[cacheId];
//         }
//     );
// export const isCacheLoaded = createSelector(
//     getClanCacheState,
//     s => s.loaded
// );
