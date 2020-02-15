import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

import { DefinitionModelState } from '../store/definitions.state';
import * as definitionSelectors from '../store/definitions.selectors';

import { ActivityModeDefinition } from 'bungie-models';
import { Observable } from 'rxjs';
// import { DefinitionModel } from '../models/definitionModel';
import { ActivityModeModel } from '../models/ActivityModeModel';
import {ActivityDefinition} from '@destiny/models/definitions';


@Injectable({
    providedIn: 'root'
})
export class ActivitiesService extends BaseDefinitionsService {
    definitionModeKey = 'activities';

    constructor(private pStore: Store<DefinitionModelState>) {
        super(pStore);
    }

    initializeCache(defs: any) {
        this.addDefinitionsToState({ id: this.definitionModeKey, definitions: defs });
    }

    getDefinitions(): Observable<ActivityDefinition> {
        // return this.pStore.select(definitionSelectors.cacheById(this.definitionModeKey));
        return this.getDefinitionsFromState(this.definitionModeKey);
    }
}
