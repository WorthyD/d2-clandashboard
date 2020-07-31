import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService } from '@destiny/data';
import { switchMap } from 'rxjs/operators';
import { getClanIdState } from '../store/clan-id/clan-id.selector';
import { ClanState } from '../store/clan-state.state';
import { loadSeals } from '../store/seals/seal.actions';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { getAllSeals, getClanSealLoading } from '../store/seals/seal.selectors';

@Injectable()
export class SealsService {
  constructor(private presentationNodeService: PresentationNodeDefinitionService, private store: Store<ClanState>) {}

  rootSealNode = this.presentationNodeService.getDefinitionsByHash(1652422747);

  sealNodes = this.presentationNodeService.getDefinitionsGroupByHash(
    this.rootSealNode.children.presentationNodes.map((x) => x.presentationNodeHash)
  );

  sealsLoading$ = this.store.pipe(select(getClanSealLoading));
  sealMembers$ = this.store.pipe(select(getAllSeals));

  getChildNode(hash) {
    return this.presentationNodeService.getDefinitionsByHash(hash);
  }

  loadSeals() {
    this.store.dispatch(loadSeals({ seals: this.sealNodes }));
  }
}
