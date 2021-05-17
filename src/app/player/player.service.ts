import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';

@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202];
  constructor(private d2Service: Destiny2Service, private activatedRoute: ActivatedRoute) {
    super();
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
