import { Injectable } from '@angular/core';

import { Clan } from '../models/Clan';
import { GroupsV2GroupV2 } from 'bungie-api';

@Injectable({
  providedIn: 'root'
})
export class ClanParseService {
  constructor() {}

  public parseClan(c: GroupsV2GroupV2): Clan {
    const clan: Clan = new Clan();
    clan.about = c.about;
    clan.avatarPath = c.avatarPath;
    clan.bannerPath = c.bannerPath;
    clan.creationDate = new Date(c.creationDate);
    clan.groupId = c.groupId;
    clan.memberCount = c.memberCount;
    clan.motto = c.motto;
    clan.name = c.name;
    clan.theme = c.theme;
    return clan;
  }
}
