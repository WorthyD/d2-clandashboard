import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';

@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202];
  constructor(private d2Service: Destiny2Service) {
    super();
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
