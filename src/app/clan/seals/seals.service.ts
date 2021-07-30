import { Injectable } from '@angular/core';
import { PresentationNodeDefinitionService, ProfileMilestonesService } from '@destiny/data';
import { switchMap, filter, take, map, tap } from 'rxjs/operators';
import { ClanState } from '../store/clan-state.state';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
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

  sealsLoading = true;

  isMembersLoaded$ = this.store.pipe(select(getIsMembersLoaded));
  //selectedSealId$ = new BehaviorSubject(0);

  seals = [];

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => {
      return isMembersLoaded && m.length > 0;
    }),
    map((x) => {
      return x;
    })
  );

  loadMemberSeals$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, clanId, clanMembers]) => {
      this.sealsLoading = true;
      this.seals = this.sealNodes.map((x) => {
        return {
          seal: x,
          members: []
        };
      });

      const hashes = this.sealNodes.map((x) => x.completionRecordHash);
      return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
        map((sealProfiles) => {
          this.sealsLoading = false;

          sealProfiles.forEach((x) => {
            this.seals.find((seal) => seal.seal.completionRecordHash === x.milestoneHash).members = x.profiles;
          });
        })
      );
    })
  );

  // sealDetail$ = this.selectedSealId$.pipe(
  //   map((x) => {
  //     return this.sealNodes.find((sealNode) => sealNode.hash === +x);
  //   })
  // );

  // sealDetailMembers$ = combineLatest([this.preloadedInfo$, this.sealDetail$]).pipe(
  //   switchMap(([[isMemberLoaded, clanId, clanMembers], sealDetails]) => {
  //     // TODO: May need to add progression hashes
  //     const hashes = [sealDetails.completionRecordHash];
  //     return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
  //       map((sealProfiles) => {
  //         return sealProfiles;
  //       })
  //     );
  //   })
  // );

  getChildNode(hash) {
    return this.presentationNodeService.getDefinitionsByHash(hash);
  }
  private getNodes(node) {
    return node.children.presentationNodes.map((x) => x.presentationNodeHash);
  }

  // changeSelectedSeal(key) {
  //   this.selectedSealId$.next(key);
  // }

  loadSeals() {
    this.loadMemberSeals$.pipe(take(1)).subscribe();
  }
}
