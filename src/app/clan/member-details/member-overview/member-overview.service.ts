import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';
//import { LOCALE_ID } from '@angular/core';
import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { MemberProfileState } from '../../store/member-profiles/member-profiles.state';
import { Store, select } from '@ngrx/store';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { getClanMemberById, getIsMembersProfilesLoaded } from '../../store/member-profiles/member-profiles.selectors';
import { filter, map, switchMap } from 'rxjs/operators';
import { of, Observable, combineLatest } from 'rxjs';
import { ClanMemberSeasonPassProgression, Callout } from '@destiny/components';
import { getClanMemberId } from '@destiny/data';
import { latestSeason } from '@destiny/models';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
import { ClanRosterService, ClanCrucibleService, ClanGambitService } from '@destiny/data';

@Injectable()
export class MemberOverviewService {
  constructor(
    private memberStore: Store<ClanMemberState>,
    private profileStore: Store<MemberProfileState>,
    private clanRosterService: ClanRosterService,
    private clanCrucibleService: ClanCrucibleService,
    private clanGambitService: ClanGambitService,
    private store: Store<any>,
    private decimalPipe: DecimalPipe
  ) {}

  selectedMember$ = this.memberStore.pipe(select(getSelectedClanMember));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  preload$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.selectedMember$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );

  selectedProfile$ = this.selectedMember$.pipe(
    switchMap((item) => {
      return this.profileStore.pipe(select(getClanMemberById(getClanMemberId(item))));
    })
  );

  selectSeasonPass$: Observable<ClanMemberSeasonPassProgression> = this.selectedProfile$.pipe(
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

  selectedCharacters$ = this.selectedProfile$.pipe(
    map((item) => {
      const charIDs = item?.profile?.data?.characterIds;
      return charIDs?.map((x) => {
        return item.characters.data[x];
      });
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
}
