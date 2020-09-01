import { Injectable } from '@angular/core';
// import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

// import { DefinitionModelState } from '../store/definitions.state';
//import * as definitionSelectors from '../store/definitions.selectors';

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
export class ActivityModeService {
  definitionModeKey = 'activityModes';

  definitions: ActivityModeDefinition[];

  constructor() {}

  initializeCache(defs: any) {
    this.definitions = defs;
  }

  getDefinitions(): ActivityModeDefinition[] {
    return this.definitions;
  }
}
