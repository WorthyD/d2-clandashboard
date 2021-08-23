import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { ActivityStats, MemberProfile } from 'bungie-models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';
import { latestSeason } from '@destiny/models';
import { Callout } from '@destiny/components';
import {
  getGloryPoints,
  getInfamyPoints,
  getInfamyResets,
  getValorPoints,
  getValorResets,
  BungieInfoService,
  PresentationNodeDefinitionService
} from '@destiny/data';
import { DecimalPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { select, Store } from '@ngrx/store';
import { selectEffectiveTheme } from '../root-store/settings/settings.selectors';

import { convertSealAndProfile } from '@destiny/components/lib/seals/player-seals';

@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202, 900];
  constructor(
    private store: Store<any>,
    private d2Service: Destiny2Service,
    private decimalPipe: DecimalPipe,
    private bungieInfoService: BungieInfoService,
    public dialog: MatDialog,
    private presentationNodeService: PresentationNodeDefinitionService,
    private router: Router
  ) {
    super();
  }
  legacySealNode = this.presentationNodeService.getDefinitionsByHash(1881970629);
  currentSealNodes = this.presentationNodeService.getDefinitionsByHash(616318467);
  allNodes = this.getNodes(this.currentSealNodes).concat(this.getNodes(this.legacySealNode));

  sealNodes = this.presentationNodeService.getDefinitionsGroupByHash(this.allNodes);

  themeSource$: BehaviorSubject<string> = new BehaviorSubject('');
  theme$ = this.store.pipe(select(selectEffectiveTheme));

  //memberId: Subject<string> = new Subject();
  memberIdSource: BehaviorSubject<string> = new BehaviorSubject('');
  memberId = this.memberIdSource.asObservable();

  memberProfile$ = this.memberId.pipe(
    filter((x) => !!x),
    switchMap((x) => {
      // tslint:disable-next-line:radix
      const memberType = x.split('-')[0];
      const memberId = x.split('-')[1];

      return this.getPlayerProfile(memberType, memberId);
    }),
    shareReplay(1)
  );

  seasonPass$ = this.memberProfile$.pipe(
    map((member) => {
      const characterId = member?.profile?.data?.characterIds[0];
      if (characterId > 0 && member?.characterProgressions?.data[characterId]?.progressions) {
        const characterProgressions = member?.characterProgressions?.data[characterId].progressions;
        return {
          progression: characterProgressions[latestSeason.seasonRewardProgressionHash.toString()],
          prestigeProgression: characterProgressions[latestSeason.seasonPrestigeProgressionHash.toString()]
        };
      }
    })
  );

  characters$ = this.memberProfile$.pipe(
    map((item) => {
      const charIDs = item?.profile?.data?.characterIds;
      return charIDs?.map((x) => {
        return item.characters.data[x];
      });
    })
  );

  bungieInfoLoadingSource$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  bungieInfoLoading$ = this.bungieInfoLoadingSource$.asObservable();

  bungieInfo$ = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    switchMap((profile) => {
      this.bungieInfoLoadingSource$.next(true);
      return this.bungieInfoService.getBungieInformation(
        profile.profile.data.userInfo.membershipType,
        profile.profile.data.userInfo.membershipId
      );
    }),
    map((response) => {
      this.bungieInfoLoadingSource$.next(false);
      return response.Response;
    })
  );
  selectMemberTriumphs$ = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    map((memberStats) => {
      return {
        triumphScore: memberStats.profileRecords.data.activeScore,
        lifetimeScore: memberStats.profileRecords.data.lifetimeScore
      };
    })
  );
  memberSealInfo$ = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    map((memberStats) => {
      const hashes = this.sealNodes.map((x) => x.completionRecordHash);
      const stuff = hashes.map((x) => {
        return {
          milestoneHash: x,
          profiles: [memberStats]
        };
      });
      return convertSealAndProfile(this.sealNodes, stuff);
    })
  );

  selectMemberCrucibleStats$: Observable<ActivityStats> = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    map((profile) => {
      return {
        memberProfile: null,
        stats: {
          valorPoints: getValorPoints(profile),
          valorResets: getValorResets(profile.profileRecords),
          gloryPoints: getGloryPoints(profile)
        }
      };
    })
  );

  selectMemberGambitStats$: Observable<ActivityStats> = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    map((profile) => {
      return {
        memberProfile: null,
        stats: {
          infamyPoints: getInfamyPoints(profile),
          infamyResets: getInfamyResets(profile.profileRecords)
        }
      };
    })
  );

  memberSnapShot$: Observable<Callout[]> = combineLatest([
    this.selectMemberTriumphs$,
    this.selectMemberCrucibleStats$,
    this.selectMemberGambitStats$
  ]).pipe(
    map(([triumphs, crucible, gambit]) => {
      return [
        {
          title: 'Triumph Score',
          value: this.decimalPipe.transform(triumphs.triumphScore),
          subTitle: 'Lifetime Score',
          subValue: this.decimalPipe.transform(triumphs.lifetimeScore)
        },
        {
          title: 'Valor Points',
          value: this.decimalPipe.transform(crucible.stats.valorPoints),
          subTitle: 'Resets',
          subValue: crucible.stats.valorResets
        },
        {
          title: 'Glory Points',
          value: this.decimalPipe.transform(crucible.stats.gloryPoints)
        },
        {
          title: 'Infamy Points',
          value: this.decimalPipe.transform(gambit.stats.infamyPoints),
          subTitle: 'Resets',
          subValue: gambit.stats.infamyResets
        }
      ];
    })
  );

  setMemberId(memberId) {
    this.memberIdSource.next(memberId);
  }

  // getMemberId() {
  //   console.log(this.activatedRoute);
  //   // return this.activatedRoute.parent.params.pipe(
  //   //   map((x) => {
  //   //     console.log(x);
  //   //     return x;
  //   //   }, distinctUntilChanged())
  //   // );
  //   return this.activatedRoute?.params.pipe(map((x) => x.memberId, distinctUntilChanged()));
  // }

  getPlayerProfile(platformId: string, profileId: string): Observable<MemberProfile> {
    return this.d2Service
      .destiny2GetProfile((profileId as unknown) as number, (platformId as unknown) as number, this.profileComponents)
      .pipe(
        map((memberProfileResponse) => {
          return memberProfileResponse.Response;
        }),
        catchError((error) => {
          this.openError(error);
          return of();
        })
      );
  }

  private getNodes(node) {
    return node.children.presentationNodes.map((x) => x.presentationNodeHash);
  }

  openError(error) {
    console.log('error', error);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title: error.error.ErrorStatus, description: error.error.Message }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/', 'player-search']);
    });
  }
}
