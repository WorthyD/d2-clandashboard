import { Injectable } from '@angular/core';

import { Destiny2Service } from 'bungie-api';
import { BaseClanService } from '../base-clan.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile } from 'bungie-models';

@Injectable()
export class ClanMemberActivityService extends BaseClanService{
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, 'MemberActivities');
  }
  private getMemberActivityId(){
  }


  private getMemberActivitiesSerialized(clanId: number, member: MemberProfile){
  }


}
