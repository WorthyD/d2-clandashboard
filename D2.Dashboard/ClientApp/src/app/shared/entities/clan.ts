import { ClanInfo } from './clan-info';

export interface Clan {
  GroupId: number;
  Name: string;
  GroupType: number;
  MembershipIdCreated: number;
  CreationDate: Date | string;
  ModificationDate: Date | string;
  About: string;
  MemberCount: number;
  IsPublic: boolean;
  IsPublicTopicAdminOnly: boolean;
  Motto: string;
  Locale: string;
  Theme: string;
  BannerPath: string;
  AvatarPath: string;

  ClanInfo: ClanInfo;
}
