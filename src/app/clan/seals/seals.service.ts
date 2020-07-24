import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService } from '@destiny/data';
import { switchMap } from 'rxjs/operators';
import { getClanIdState } from '../store/clan-id/clan-id.selector';
import { ClanState } from '../store/clan-state.state';
import { loadSeals } from '../store/seals/seal.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class SealsService {
  constructor(private presentationNodeService: PresentationNodeDefinitionService, private store: Store<ClanState>) {}

  rootSealNode$ = this.presentationNodeService.getDefinitionsByHash(1652422747);
  sealsNodes$ = this.rootSealNode$.pipe(
    switchMap((x) => {
      console.log(x);
      const hashes = x.children.presentationNodes.map((x) => x.presentationNodeHash);
      return this.presentationNodeService.getDefinitionsGroupByHash(hashes);
    })
  );

  getChildNode(hash) {
    return this.presentationNodeService.getDefinitionsByHash(hash);
  }

  loadSeals() {
    this.sealsNodes$.subscribe((seals) => {
      console.log('seals loaded');
      this.store.dispatch(loadSeals({ seals }));
    });
  }

  // get seal hashes
  // get members
}
