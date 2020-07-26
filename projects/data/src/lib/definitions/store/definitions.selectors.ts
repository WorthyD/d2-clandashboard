// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import {
//     DefinitionModelState,
//     DefinitionModelStateAdapter
// } from './definitions.state';

// export const getDefinitionState = createFeatureSelector<DefinitionModelState>(
//     'definitions'
// );

// export const {
//     selectIds: getDefinitionIds,
//     selectEntities: getDefinitionEntities,
//     selectAll: getAllDefinitions,
//     selectTotal: getTotalDefinitions
// } = DefinitionModelStateAdapter.getSelectors(getDefinitionState);

// export const cacheById = cacheId =>
//     createSelector(getDefinitionEntities, entities => {
//         return cacheId && entities[cacheId];
//     });
// export const cacheByHash = (cacheId, hashId) =>
//     createSelector(getDefinitionEntities, entities => {
//         return (
//             cacheId &&
//             entities[cacheId] &&
//             entities[cacheId].definitions &&
//             entities[cacheId].definitions[hashId]
//         );
//     });
