import {Injectable, OnInit} from '@angular/core';
import { ClanInfo } from './clan-info';

@Injectable()
export class Clan {
  groupId: number;
  name: string;
  groupType: number;
  membershipIdCreated: number;
  creationDate: Date | string;
  modificationDate: Date | string;
  about: string;
  memberCount: number;
  isPublic: boolean;
  isPublicTopicAdminOnly: boolean;
  motto: string;
  locale: string;
  theme: string;
  bannerPath: string;
  avatarPath: string;

  clanInfo: ClanInfo;
}
