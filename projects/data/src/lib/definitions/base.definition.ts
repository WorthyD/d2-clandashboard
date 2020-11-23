import { Injectable } from '@angular/core';
import { PresentationNodeDefinition } from '@destiny/models/definitions';

export class BaseDefinitionService {
  definitions;

  initializeCache(defs: any) {
    this.definitions = defs;
  }

  getDefinitions() {
    return this.definitions;
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
