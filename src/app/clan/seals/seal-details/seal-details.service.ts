import { Injectable } from '@angular/core';
import { ProfileMilestonesService } from '@destiny/data';
import { filter, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { SealsService } from '../seals.service';
import { PresentationNodeDefinition } from 'bungie-models';

export interface ClanSealDetails {
  seal: PresentationNodeDefinition;

  totalMembers: number;

  completedNumber: number;

  completedPercentage: number;

  guildedNumber: number;

  guildedPercentage: number;

  hasGuilded: boolean;

  isLoading: boolean;
}

@Injectable()
export class SealDetailsService {
  constructor(private sealsService: SealsService, private profileMilestonesService: ProfileMilestonesService) {}
  selectedSealId$ = new BehaviorSubject(0);

  sealDetail$ = this.selectedSealId$.pipe(
    map((x) => {
      return this.sealsService.sealNodes.find((sealNode) => sealNode.hash === +x);
    })
  );
  sealDetailMembers$ = combineLatest([this.sealsService.preloadedInfo$, this.sealDetail$]).pipe(
    switchMap(([[isMemberLoaded, clanId, clanMembers], sealDetails]) => {
      // TODO: May need to add progression hashes
      const hashes = [sealDetails.completionRecordHash];
      return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), clanMembers, hashes).pipe(
        map((sealProfiles) => {
          return sealProfiles;
        })
      );
    })
  );
  clanSealDetails$: Observable<ClanSealDetails> = combineLatest([this.sealDetail$, this.sealDetailMembers$]).pipe(
    filter(([sealDetails, sealDetailMembers]) => !!sealDetails),
    map(
      ([sealDetails, sealDetailMembers]): ClanSealDetails => {
        console.log('mapping');
        console.log('mapping', sealDetailMembers);
        return {
          completedNumber: 0,
          completedPercentage: 0,
          guildedNumber: 0,
          guildedPercentage: 0,
          hasGuilded: false,
          isLoading: true,
          seal: sealDetails,
          totalMembers: 0
        };
      }
    )
  );
  changeSelectedSeal(key) {
    this.selectedSealId$.next(key);
  }
}
