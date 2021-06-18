import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { ActivityStats, MemberProfile } from 'bungie-models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';
import { latestSeason } from '@destiny/models';
import { Callout } from '@destiny/components';
import { getGloryPoints, getInfamyPoints, getInfamyResets, getValorPoints, getValorResets } from '@destiny/data';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202, 900];
  constructor(private d2Service: Destiny2Service, private decimalPipe: DecimalPipe) {
    super();
  }

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

  selectMemberTriumphs$ = this.memberProfile$.pipe(
    filter((profile) => !!profile),
    map((memberStats) => {
      return {
        triumphScore: memberStats.profileRecords.data.activeScore,
        lifetimeScore: memberStats.profileRecords.data.lifetimeScore
      };
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
        })
      );
  }
}
