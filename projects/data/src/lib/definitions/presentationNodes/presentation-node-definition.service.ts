import { Injectable } from '@angular/core';
import { PresentationNodeDefinition } from '@destiny/models/definitions';

@Injectable({
  providedIn: 'root'
})
export class PresentationNodeDefinitionService {
  definitions;

  initializeCache(defs: any) {
    this.definitions = defs;
  }

  getDefinitionsByHash(hash: number): PresentationNodeDefinition {
    return this.definitions[hash];
  }

  getDefinitionsGroupByHash(hashes: number[]): PresentationNodeDefinition[] {
    return hashes.map((h) => {
      return this.definitions[h];
    });
  }
}
