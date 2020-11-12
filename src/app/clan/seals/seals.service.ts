import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService } from '@destiny/data';
import { switchMap, filter, take } from 'rxjs/operators';
import { getClanIdState } from '../store/clan-id/clan-id.selector';
import { ClanState } from '../store/clan-state.state';
import { loadSeals } from '../store/seals/seal.actions';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { getAllSeals, getClanSealLoading } from '../store/seals/seal.selectors';
import { getIsMembersLoaded } from '../store/clan-members/clan-members.selectors';

@Injectable()
export class SealsService {
  constructor(private presentationNodeService: PresentationNodeDefinitionService, private store: Store<ClanState>) {}

  legacySealNode = this.presentationNodeService.getDefinitionsByHash(1881970629);
  currentSealNodes = this.presentationNodeService.getDefinitionsByHash(616318467);
  allNodes = this.getNodes(this.currentSealNodes).concat(this.getNodes(this.legacySealNode));

  //allSeals =
  //1881970629
  //616318467

  sealNodes = this.presentationNodeService.getDefinitionsGroupByHash(this.allNodes);

  sealsLoading$ = this.store.pipe(select(getClanSealLoading));
  sealMembers$ = this.store.pipe(select(getAllSeals));
  isMembersLoaded$ = this.store.pipe(select(getIsMembersLoaded));

  getChildNode(hash) {
    return this.presentationNodeService.getDefinitionsByHash(hash);
  }
  private getNodes(node) {
    return node.children.presentationNodes.map((x) => x.presentationNodeHash);
  }

  loadSeals() {
    this.isMembersLoaded$
      .pipe(
        filter((f) => f === true),
        take(1)
      )
      .subscribe((x) => {
        this.store.dispatch(loadSeals({ seals: this.sealNodes }));
      });
  }
}
