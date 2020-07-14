import { Injectable } from '@angular/core';
import { BaseClanService } from '../base-clan.service';
import { BaseProfileService } from '../base-profile.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api';

@Injectable()
export class ProfileMilestonesService extends BaseProfileService {
  constructor(private clanDb: ClanDatabase, private d2Service: Destiny2Service) {
    super(clanDb, 'ProfileMilestones', d2Service, [900]);
  }
}
