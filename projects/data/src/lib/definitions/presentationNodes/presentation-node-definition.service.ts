import { Injectable } from '@angular/core';
//mport { BaseDefinitionsService } from '../base-definitions.service';
// import { DefinitionModelState } from '../store/definitions.state';
import { Store, select } from '@ngrx/store';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { PresentationNodeDefinition } from '@destiny/models/definitions';
// import * as definitionSelectors from '../store/definitions.selectors';
import { map, mergeMap, toArray, take } from 'rxjs/operators';

// interface DefinitionPresentationNodeModel {
//   id: string;
//   definitions: PresentationNodeDefinition;
// }

@Injectable({
  providedIn: 'root'
})
export class PresentationNodeDefinitionService {
  // definitionModeKey = 'presentationNode';
  //  definitions$: BehaviorSubject<PresentationNodeDefinition[]> = new BehaviorSubject([]);
  definitions;
  constructor() {
    //  super(pStore);
  }

  initializeCache(defs: any) {
    //  this.definitions$.next(defs);
    this.definitions = defs;
  }

  // getDefinitions(): Observable<PresentationNodeDefinition[]> {
  //   return this.definitions$;
  // }

  // getDefinitionsByHash(hash: number): Observable<PresentationNodeDefinition> {
  //   return this.definitions$.pipe(
  //     map((x) => {
  //       return x[hash];
  //     })
  //   );
  // }
  getDefinitionsByHash(hash: number): PresentationNodeDefinition {
    // return this.definitions$.pipe(
    //   map((x) => {
    //     return x[hash];
    //   })
    // );
    return this.definitions[hash];
  }

  getDefinitionsGroupByHash(hashes: number[]): PresentationNodeDefinition[] {
    return hashes.map((h) => {
      return this.definitions[h];
    });

    // return from(hashes).pipe(
    //   mergeMap((hash) => {
    //     return this.definitions$.pipe(
    //       take(1),
    //       map((x) => {
    //         return x[hash];
    //       })
    //     );
    //   }),
    //   toArray()
    // );
  }
}
