import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { DefinitionModelState } from '../store/definitions.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PresentationNodeDefinition } from '@destiny/models/definitions';
import * as definitionSelectors from '../store/definitions.selectors';

interface DefinitionPresentationNodeModel {
  id: string;
  definitions: PresentationNodeDefinition;
}

@Injectable({
  providedIn: 'root'
})
export class PresentationNodeDefinitionService extends BaseDefinitionsService {
  definitionModeKey = 'presentationNode';
  constructor(private pStore: Store<DefinitionModelState>) {
    super(pStore);
  }
  initializeCache(defs: any) {
    this.addDefinitionsToState({
      id: this.definitionModeKey,
      definitions: defs
    });
  }

  getDefinitions(): Observable<DefinitionPresentationNodeModel> {
    return this.getDefinitionsFromState(this.definitionModeKey);
  }

  getDefinitionsByHash(hash: number): Observable<PresentationNodeDefinition> {
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
