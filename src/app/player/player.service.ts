import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';
import { latestSeason } from '@destiny/models';

@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202];
  constructor(private d2Service: Destiny2Service, private activatedRoute: ActivatedRoute) {
    super();
  }

  // memberId = this.activatedRoute.params.pipe(
  //   map((x) => {
  //     return x.memberId;
  //   }, distinctUntilChanged())
  // );

  //memberId: Subject<string> = new Subject();
  memberIdSource: BehaviorSubject<string> = new BehaviorSubject('test');
  memberId = this.memberIdSource.asObservable();

  memberProfile = this.memberId.pipe(
    switchMap((x) => {
      // tslint:disable-next-line:radix
      const memberType = x.split('-')[0];
      const memberId = x.split('-')[1];

      return this.getPlayerProfile(memberType, memberId);
    }),
    shareReplay(1)
  );

  seasonPass$ = this.memberProfile.pipe(
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

  characters$ = this.memberProfile.pipe(
    map((item) => {
      const charIDs = item?.profile?.data?.characterIds;
      return charIDs?.map((x) => {
        return item.characters.data[x];
      });
    })
  );





  setMemberId(memberId) {
    this.memberIdSource.next(memberId);
  }

  getMemberId() {
    console.log(this.activatedRoute);
    // return this.activatedRoute.parent.params.pipe(
    //   map((x) => {
    //     console.log(x);
    //     return x;
    //   }, distinctUntilChanged())
    // );
    return this.activatedRoute?.params.pipe(map((x) => x.memberId, distinctUntilChanged()));
  }

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
