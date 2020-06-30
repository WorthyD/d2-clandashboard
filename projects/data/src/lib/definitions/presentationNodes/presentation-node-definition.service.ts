import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { DefinitionModelState } from '../store/definitions.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface DefinitionPresentationNodeModel{
  id:string;
  definitions:
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
