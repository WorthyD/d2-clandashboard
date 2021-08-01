import { Injectable } from '@angular/core';
import { ProfileMilestonesService } from '@destiny/data';
import { filter, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { SealsService } from '../seals.service';
import { MemberProfile, PresentationNodeDefinition } from 'bungie-models';
import { SealCompletedPipe } from 'projects/components/src/lib/pipes/seal-pipes/seal-completed.pipe';

export interface ClanSealDetails {
  seal: PresentationNodeDefinition;

  totalMembers: number;

  completedNumber: number;

  completedPercentage: number;

  guildedNumber: number;

  guildedPercentage: number;

  hasGuilded: boolean;
}

@Injectable()
export class SealDetailsService {
  constructor(private sealsService: SealsService, private profileMilestonesService: ProfileMilestonesService) {}
  selectedSealId$ = new BehaviorSubject(0);
  sealCompletePipe = new SealCompletedPipe();

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
          return sealProfiles[0].profiles;
        })
      );
    })
  );
  clanSealDetails$: Observable<ClanSealDetails> = combineLatest([this.sealDetail$, this.sealDetailMembers$]).pipe(
    filter(([sealDetails, sealDetailMembers]) => !!sealDetails),
    map(
      ([sealDetails, sealDetailMembers]): ClanSealDetails => {
        // console.log('mapping', sealDetailMembers);
        const completed: number = this.sealCompletePipe.transform(sealDetailMembers, sealDetails.completionRecordHash)
          .length;

        const percentage =
          sealDetailMembers?.length > 0 ? Math.floor((+completed / sealDetailMembers?.length) * 100) : 0;
        const hasGuilded = this.hasGuilded(sealDetails, sealDetailMembers);
        const guildedCount = hasGuilded ? this.guildedCount(sealDetails, sealDetailMembers) : 0;
        const guildedPercentage =
          sealDetailMembers?.length > 0 ? Math.floor((+guildedCount / sealDetailMembers?.length) * 100) : 0;
        return {
          completedNumber: +completed,
          completedPercentage: percentage,
          guildedNumber: guildedCount,
          guildedPercentage: guildedPercentage,
          hasGuilded: hasGuilded,
          seal: sealDetails,
          totalMembers: sealDetailMembers?.length || 0
        };
      }
    )
  );
  changeSelectedSeal(key) {
    this.selectedSealId$.next(key);
  }

  hasGuilded(sealDetails: PresentationNodeDefinition, sealDetailMembers: MemberProfile[]) {
    // ! This is super dodgey. I don't know if this will be the best way to handle it in the future.
    const completionHash = sealDetails.completionRecordHash;
    const completionRecordCount = sealDetails.children.records.length;
    const referenceMember = sealDetailMembers.find((x) => x.profileRecords.data.records[completionHash]);
    const completionValue =
      referenceMember.profileRecords.data.records[completionHash].objectives[0].completionValue ||
      completionRecordCount;

    return completionValue !== completionRecordCount;
  }

  guildedCount(sealDetails: PresentationNodeDefinition, sealDetailMembers: MemberProfile[]) {
    const completionHash = sealDetails.completionRecordHash;
    const completionRecordCount = sealDetails.children.records.length;
    const completed = sealDetailMembers.filter((m) => {
      const records = m.profileRecords.data.records[completionHash]?.objectives;

      if (records) {
        return records[0]?.progress === completionRecordCount;
      }
      return false;
    });

    return completed.length;
  }
}
