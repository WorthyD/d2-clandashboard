import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

import { DefinitionModelState } from '../store/definitions.state';
import * as definitionSelectors from '../store/definitions.selectors';

// import { ActivityModeDefinition } from 'bungie-models';
import { Observable } from 'rxjs';
import { DefinitionModel } from '../models/definitionModel';
// import { ActivityModeModel } from '../models/ActivityModeModel';
// import { ActivityModeModel } from 'bungie-models/definitions';
// import { ClanMember } from 'bungie-models';

import { MilestoneDefinition } from '@destiny/models/definitions';
interface DefinitionActivityModel {
    id: string;
    definitions: MilestoneDefinition[];
}

@Injectable({
    providedIn: 'root'
})
export class MilestoneDefinitionService extends BaseDefinitionsService {
    definitionModeKey = 'milestones';

    constructor(private pStore: Store<DefinitionModelState>) {
        super(pStore);
    }

    initializeCache(defs: any) {
        this.addDefinitionsToState({ id: this.definitionModeKey, definitions: defs });
    }

    getDefinitions(): Observable<DefinitionActivityModel> {
        return this.getDefinitionsFromState(this.definitionModeKey);
    }
}
