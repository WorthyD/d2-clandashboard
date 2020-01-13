import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DefinitionModelState } from './store/definitions.state';
import { initializeCache } from './store/definitions.actions';
import { DefinitionModel } from './models/definitionModel';

@Injectable({
    providedIn: 'root'
})
export class BaseDefinitionsService {
    constructor(private store: Store<DefinitionModelState>) {}

    addDefinitionsToState(definitionModel: DefinitionModel) {
        this.store.dispatch(initializeCache({ definitions: definitionModel }));
    }
}
