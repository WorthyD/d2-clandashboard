import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { Store, createSelector, select } from '@ngrx/store';

import { DefinitionModelState } from '../store/definitions.state';
//import * as definitionSelectors from '../store/definitions.selectors';

// import { ActivityModeDefinition } from 'bungie-models';
import { Observable } from 'rxjs';
import { DefinitionModel } from '../models/definitionModel';
// import { ActivityModeModel } from '../models/ActivityModeModel';
// import { ActivityModeModel } from 'bungie-models/definitions';
// import { ClanMember } from 'bungie-models';
// import {} from '../milestones/

import { MilestoneDefinition } from '@destiny/models/definitions';
//import { getDefinitionEntities } from '../store/definitions.selectors';

import * as definitionSelectors from '../store/definitions.selectors';
interface DefinitionActivityModel {
    id: string;
    definitions: MilestoneDefinition[];
}
// export const cacheById = (cacheId, hashId) =>
//     createSelector(getDefinitionEntities, entities => {
//         return cacheId && entities[cacheId] &&
//     });
import { MilestoneHashes } from './MILESTONE_HASHES';

@Injectable({
    providedIn: 'root'
})
export class MilestoneDefinitionService extends BaseDefinitionsService {
    definitionModeKey = 'milestones';

    constructor(private pStore: Store<DefinitionModelState>) {
        super(pStore);
    }

    initializeCache(defs: any) {
        this.addDefinitionsToState({
            id: this.definitionModeKey,
            definitions: defs
        });
    }

    getDefinitions(): Observable<DefinitionActivityModel> {
        return this.getDefinitionsFromState(this.definitionModeKey);
    }

    getDefinitionsByHash(hash: number): Observable<MilestoneDefinition> {
        return this.pStore.pipe(
            select(
                definitionSelectors.cacheByHash(
                    this.definitionModeKey,
                    //MilestoneHashes.ClanRewards
                    hash
                )
            )
        );
    }
}
