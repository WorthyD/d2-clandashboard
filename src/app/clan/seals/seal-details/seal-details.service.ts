import { Injectable } from '@angular/core';
import { ProfileMilestonesService } from '@destiny/data';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { SealsService } from '../seals.service';

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
  changeSelectedSeal(key) {
    this.selectedSealId$.next(key);
  }
}
