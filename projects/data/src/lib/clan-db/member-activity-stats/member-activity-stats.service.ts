import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api';
import { ClanDatabase } from '../ClanDatabase';
import { from, of } from 'rxjs';
import { BaseClanService } from '../base-clan.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { StoreId } from '../app-indexed-db';
import { ClanMember, MemberProfile } from 'bungie-models';

@Injectable()
export class MemberActivityStatsService extends BaseClanService {
  constructor(private d2Service: Destiny2Service, private clanDb: ClanDatabase) {
    super(clanDb, StoreId.ClanDetails);
  }

  private getMemberActivityStatsFromAPI(member: MemberProfile, characterId: number) {
    return this.d2Service.destiny2GetDestinyAggregateActivityStats(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType
    );
  }
}
