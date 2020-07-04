import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService } from '@destiny/data';

@Injectable()
export class SealsService {
  constructor(private presentationNodeService: PresentationNodeDefinitionService) {}

  rootSealNode$ = this.presentationNodeService.getDefinitionsByHash(1652422747);

  getChildNode(hash) {
    return this.presentationNodeService.getDefinitionsByHash(hash);
  }
}
