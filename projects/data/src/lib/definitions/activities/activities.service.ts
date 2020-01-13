import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

import { DefinitionModelState } from '../store/definitions.state';
import * as definitionSelectors from '../store/definitions.selectors';

import { ActivityModeDefinition } from 'bungie-models';
import { Observable } from 'rxjs';
import { DefinitionModel } from '../models/definitionModel';
import { ActivityModeModel } from '../models/ActivityModeModel';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService extends BaseDefinitionsService {
    definitionKey = 'activityModes';

    constructor(private pStore: Store<DefinitionModelState>) {
        super(pStore);
    }

    initializeCache(defs: any) {
        this.addDefinitionsToState({ id: this.definitionKey, definitions: defs });
    }

    getDefinitions(): Observable<ActivityModeModel> {
        return this.pStore.select(definitionSelectors.cacheById(this.definitionKey));
    }
}
