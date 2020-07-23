import { Injectable } from '@angular/core';
import { BaseDefinitionsService } from '../base-definitions.service';
import { DefinitionModelState } from '../store/definitions.state';
import { Store, select } from '@ngrx/store';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { PresentationNodeDefinition } from '@destiny/models/definitions';
import * as definitionSelectors from '../store/definitions.selectors';
import { map, mergeMap, toArray } from 'rxjs/operators';

// interface DefinitionPresentationNodeModel {
//   id: string;
//   definitions: PresentationNodeDefinition;
// }

@Injectable({
  providedIn: 'root'
})
export class PresentationNodeDefinitionService extends BaseDefinitionsService {
  definitionModeKey = 'presentationNode';
  definitions: BehaviorSubject<PresentationNodeDefinition[]> = new BehaviorSubject([]);

  constructor(private pStore: Store<DefinitionModelState>) {
    super(pStore);
  }

  initializeCache(defs: any) {
    this.definitions.next(defs);
  }

  getDefinitions(): Observable<PresentationNodeDefinition[]> {
    return this.definitions;
  }

  getDefinitionsByHash(hash: number): Observable<PresentationNodeDefinition> {
    return this.definitions.pipe(
      map((x) => {
        return x[hash];
      })
    );
  }
  getDefinitionsGroupByHash(hashes: number[]): Observable<PresentationNodeDefinition[]> {
    return from(hashes).pipe(
      mergeMap((hash) =>
        this.definitions.pipe(
          map((x) => {
            return x[hash];
          })
        )
      ),
      toArray()
    );
  }
}
