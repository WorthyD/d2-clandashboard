import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { ActivityStats, MemberProfile } from 'bungie-models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../../shared/components/player/player.service';
import { latestSeason } from '@destiny/models';
import { Callout, ClanMemberSeasonPassProgression } from '@destiny/components';
import {
  BungieInfoService,
  getGloryPoints,
  getInfamyPoints,
  getInfamyResets,
  getValorPoints,
  getValorResets,
  PresentationNodeDefinitionService,
  ProfileMilestonesService
} from '@destiny/data';
import { DecimalPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanMemberActions from '../store/clan-members/clan-members.actions';
import * as memberProfileSelectors from '../store/member-profiles/member-profiles.selectors';
import { ClanMemberState } from '../store/clan-members/clan-members.state';

import { getSelectedClanMember } from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

import { getClanMemberById, getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import { ClanRosterService, ClanCrucibleService, ClanGambitService } from '@destiny/data';
import { selectEffectiveTheme } from 'src/app/root-store/settings/settings.selectors';
import { convertSealAndProfile } from '@destiny/components/lib/seals/player-seals';
@Injectable()
export class PlayerService extends BasePlayerService {
  //private profileComponents = [100, 104, 200, 202, 900];
  constructor(
    private store: Store<any>,
    private memberStore: Store<ClanMemberState>,
    private decimalPipe: DecimalPipe,
    private clanRosterService: ClanRosterService,
    private clanCrucibleService: ClanCrucibleService,
    private clanGambitService: ClanGambitService,
    private bungieInfoService: BungieInfoService,
    private presentationNodeService: PresentationNodeDefinitionService,

    private profileMilestonesService: ProfileMilestonesService
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

  memberProfile$: Observable<MemberProfile> = this.memberId.pipe(
    switchMap((x) => this.store.pipe(select(memberProfileSelectors.getClanMemberById(x))))
  );

  selectedMember$ = this.memberStore.pipe(select(getSelectedClanMember));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));

  preload$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.selectedMember$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  seasonPass$: Observable<ClanMemberSeasonPassProgression> = this.memberProfile$.pipe(
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

  // memberProfile = this.memberId.pipe(
  //   filter((x) => !!x),
  //   switchMap((x) => {
  //     // tslint:disable-next-line:radix
  //     const memberType = x.split('-')[0];
  //     const memberId = x.split('-')[1];

  //     return this.getPlayerProfile(memberType, memberId);
  //   }),
  //   shareReplay(1)
  // );

  // seasonPass$ = this.memberProfile.pipe(
  //   map((member) => {
  //     const characterId = member?.profile?.data?.characterIds[0];
  //     if (characterId > 0 && member?.characterProgressions?.data[characterId]?.progressions) {
  //       const characterProgressions = member?.characterProgressions?.data[characterId].progressions;
  //       return {
  //         progression: characterProgressions[latestSeason.seasonRewardProgressionHash.toString()],
  //         prestigeProgression: characterProgressions[latestSeason.seasonPrestigeProgressionHash.toString()]
  //       };
  //     }
  //   })
  // );

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
  selectMemberTriumphs$ = this.preload$.pipe(
    switchMap(([isMemberLoaded, clanId, member]) => {
      return this.clanRosterService.getMemberRosterStats(clanId, member);
    }),
    map((memberStats) => {
      return {
        triumphScore: memberStats.profile.profileRecords.data.activeScore,
        lifetimeScore: memberStats.profile.profileRecords.data.lifetimeScore
      };
    })
  );

  selectMemberCrucibleStats$ = this.preload$.pipe(
    switchMap(([isMemberLoaded, clanId, member]) => {
      return this.clanCrucibleService.getMemberCrucibleStats(clanId, member);
    })
  );
  selectMemberGambitStats$ = this.preload$.pipe(
    switchMap(([isMemberLoaded, clanId, member]) => {
      return this.clanGambitService.getMemberGambitStats(clanId, member);
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
  // SEAL INFO
  memberSealInfo$ = this.preload$.pipe(
    switchMap(([isMemberLoaded, clanId, member]) => {
      const hashes = this.sealNodes.map((x) => x.completionRecordHash);

      return this.profileMilestonesService.getSerializedProfilesByHash(clanId.toString(), [member], hashes).pipe(
        map((sealProfiles) => {
          return convertSealAndProfile(this.sealNodes, sealProfiles);
        })
      );
    })
  );
  setMemberId(memberId) {
    this.memberIdSource.next(memberId);
  }

  private getNodes(node) {
    return node.children.presentationNodes.map((x) => x.presentationNodeHash);
  }
}
