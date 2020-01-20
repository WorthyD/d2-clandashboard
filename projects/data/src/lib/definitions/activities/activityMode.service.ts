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
export class ActivityModeService extends BaseDefinitionsService {
    definitionModeKey = 'activityModes';

    constructor(private pStore: Store<DefinitionModelState>) {
        super(pStore);
    }

    initializeCache(defs: any) {
        this.addDefinitionsToState({ id: this.definitionModeKey, definitions: defs });
    }

    getDefinitions(): Observable<ActivityModeModel> {

        return this.getDefinitionsFromState(this.definitionModeKey);
    }
}
