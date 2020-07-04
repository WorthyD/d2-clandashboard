import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

import { DefinitionModelState } from '../store/definitions.state';
import * as definitionSelectors from '../store/definitions.selectors';

// import { ActivityModeDefinition } from 'bungie-models';
import { Observable, BehaviorSubject } from 'rxjs';
import { DefinitionModel } from '../models/definitionModel';
// import { ActivityModeModel } from '../models/ActivityModeModel';
// import { ActivityModeModel } from 'bungie-models/definitions';
// import { ClanMember } from 'bungie-models';

import { ActivityModeDefinition } from '@destiny/models/definitions';
interface DefinitionActivityModel {
  id: string;
  definitions: ActivityModeDefinition[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivityModeService extends BaseDefinitionsService {
  definitionModeKey = 'activityModes';

  definitions: BehaviorSubject<ActivityModeDefinition[]> = new BehaviorSubject([]);
  constructor(private pStore: Store<DefinitionModelState>) {
    super(pStore);
  }

  initializeCache(defs: any) {
    // this.addDefinitionsToState({ id: this.definitionModeKey, definitions: defs });

    this.definitions.next(defs);
  }

  getDefinitions(): Observable<ActivityModeDefinition[]> {
    //return this.getDefinitionsFromState(this.definitionModeKey);
    return this.definitions;
  }
}
