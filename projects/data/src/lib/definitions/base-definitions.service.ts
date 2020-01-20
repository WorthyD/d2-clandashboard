import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DefinitionModelState } from './store/definitions.state';
import { initializeCache } from './store/definitions.actions';
import { DefinitionModel } from './models/definitionModel';

import * as definitionSelectors from './store/definitions.selectors';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseDefinitionsService {
    constructor(private store: Store<DefinitionModelState>) {}

    addDefinitionsToState(definitionModel: DefinitionModel) {
        this.store.dispatch(initializeCache({ definitions: definitionModel }));
    }

    getDefinitionsFromState(key: string): Observable<any> {
        return this.store.select(definitionSelectors.cacheById(key));
    }
}
