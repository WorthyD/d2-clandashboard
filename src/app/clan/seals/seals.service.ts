import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService, ProfileMilestonesService } from '@destiny/data';
import { switchMap, filter, take, map } from 'rxjs/operators';
import { getClanIdState } from '../store/clan-id/clan-id.selector';
import { ClanState } from '../store/clan-state.state';
import { loadSeals } from '../store/seals/seal.actions';
import { Store, select } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { getAllSeals, getClanSealLoading } from '../store/seals/seal.selectors';
import { getIsMembersLoaded } from '../store/clan-members/clan-members.selectors';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

@Injectable()
export class SealsService {
  constructor(
    private presentationNodeService: PresentationNodeDefinitionService,
    private store: Store<ClanState>,
    private profileMilestonesService: ProfileMilestonesService
  ) {}

  legacySealNode = this.presentationNodeService.getDefinitionsByHash(1881970629);
  currentSealNodes = this.presentationNodeService.getDefinitionsByHash(616318467);
  allNodes = this.getNodes(this.currentSealNodes).concat(this.getNodes(this.legacySealNode));

  sealNodes = this.presentationNodeService.getDefinitionsGroupByHash(this.allNodes);

  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);

  sealsLoading$ = this.store.pipe(select(getClanSealLoading));
  sealMembers$ = this.store.pipe(select(getAllSeals));
  isMembersLoaded$ = this.store.pipe(select(getIsMembersLoaded));

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );
  loadMemberSeals$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, clanId, clanMembers]) => {
      const hashes = this.sealNodes.map((x) => x.completionRecordHash);
      return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
        map((sealProfiles) => {
          return sealProfiles.map((sealMember) => {
            return {
              // seal: this.sealsNodes.find((seal) => sealMember.milestoneHash === seal.completionRecordHash),
              // members: sealMember.profiles
            };
          });
        })
      );
    })
  );

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
