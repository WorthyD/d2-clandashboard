import { Injectable } from '@angular/core';
import { StatDefinition } from '@destiny/models/definitions';

@Injectable({
  providedIn: 'root'
})
export class StatDefinitionService {
  definitions;

  initializeCache(defs: any) {
    this.definitions = defs;
  }

  getDefinitionsByHash(hash: number): StatDefinition {
    return this.definitions[hash];
  }

  getDefinitionsGroupByHash(hashes: number[]): StatDefinition[] {
    return hashes.map((h) => {
      return this.definitions[h];
    });
  }
}
