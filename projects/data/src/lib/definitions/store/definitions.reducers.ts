import { createReducer, on } from '@ngrx/store';

import * as definitionState from './definitions.state';
import * as definitionActions from './definitions.actions';

export const DefinitionReducer = createReducer(
    definitionState.DefinitionModelInitialState,
    on(definitionActions.initializeCache, (state, { definitions }) => {
        return definitionState.DefinitionModelStateAdapter.upsertOne(definitions, { ...state });
    })
);
