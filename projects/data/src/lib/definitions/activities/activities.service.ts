import { Injectable } from '@angular/core';
//import { BaseDefinitionsService } from '../base-definitions.service';
import { Store } from '@ngrx/store';

//import { DefinitionModelState } from '../store/definitions.state';
//import * as definitionSelectors from '../store/definitions.selectors';

import { Observable, BehaviorSubject } from 'rxjs';
// import { DefinitionModel } from '../models/definitionModel';
import { ActivityDefinition } from '@destiny/models/definitions';

interface DefinitionActivityModeModel {
  id: string;
  definitions: ActivityDefinition[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  definitionModeKey = 'activities';
  //definitions: BehaviorSubject<ActivityDefinition[]> = new BehaviorSubject([]);
  definitions: ActivityDefinition[];

  constructor() {
    //super(pStore);
  }

  initializeCache(defs: any) {
    //this.addDefinitionsToState({ id: this.definitionModeKey, definitions: defs });
    this.definitions = defs;
  }

  getDefinitions(): ActivityDefinition[] {
    return this.definitions;
    // return this.getDefinitionsFromState(this.definitionModeKey);
  }
}
