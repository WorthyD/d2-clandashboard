// import { MOCK_WORTHY_PROFILE } from './profile.worthy.mock';
// import { MOCK_OMEGA_PROFILE } from './profile.omega.mock';
// import { MOCK_ZONED_PROFILE } from './profile.zoned.mock';
import { DBObject } from '../../clan-db/app-indexed-db';
import { nowPlusDays } from '../../utility/date-utils';

export const  MOCK_CLAN_OVERVIEW = {
  groupId: '2073131',
  name: 'DoD Paternal Chums',
  groupType: 1,
  membershipIdCreated: '22807',
  creationDate: '2017-08-24T21:26:26.668Z',
  modificationDate: '2019-09-19T03:49:06.796Z',
  about:
      // tslint:disable-next-line:max-line-length
      'We are affiliated with Dads of Destiny. Please see link below for more information, including how to join our community. See you in orbit!\n\nhttps://discord.gg/dadsofdestiny\n\n=^.^=\n\nNOTE: PC is our primary platform of operation.\n\n---Deadpixel',
  tags: [],
  memberCount: 94,
  isPublic: true,
  isPublicTopicAdminOnly: false,
  motto: `Roses are red. Violets are dudes. This doesn't make sense. Foods.`,
  allowChat: true,
  isDefaultPostPublic: false,
  chatSecurity: 0,
  locale: 'en',
  avatarImageIndex: 0,
  homepage: 0,
  membershipOption: 0,
  defaultPublicity: 2,
  theme: 'Group_Community1',
  bannerPath: '/img/Themes/Group_Community1/struct_images/group_top_banner.jpg',
  avatarPath: '/img/profile/avatars/group/defaultGroup.png',
  conversationId: '27030166',
  enableInvitationMessagingForAdmins: false,
  banExpireDate: '2001-01-01T00:00:00Z',
  features: {
      maximumMembers: 100,
      maximumMembershipsOfGroupType: 1,
      capabilities: 31,
      membershipTypes: [1, 2, 3, 4, 5],
      invitePermissionOverride: true,
      updateCulturePermissionOverride: false,
      hostGuidedGamePermissionOverride: 2,
      updateBannerPermissionOverride: false,
      joinLevel: 1
  },
  clanInfo: {
      d2ClanProgressions: {
          '584850370': {
              progressionHash: 584850370,
              dailyProgress: 600000,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 516667,
              currentProgress: 600000,
              level: 6,
              levelCap: 6,
              stepIndex: 6,
              progressToNextLevel: 0,
              nextLevelAt: 0
          },
          '1273404180': {
              progressionHash: 1273404180,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 1,
              levelCap: 6,
              stepIndex: 1,
              progressToNextLevel: 0,
              nextLevelAt: 1
          },
          '3381682691': {
              progressionHash: 3381682691,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 1,
              levelCap: 6,
              stepIndex: 1,
              progressToNextLevel: 0,
              nextLevelAt: 1
          },
          '3759191272': {
              progressionHash: 3759191272,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 1,
              levelCap: 6,
              stepIndex: 1,
              progressToNextLevel: 0,
              nextLevelAt: 1
          }
      },
      clanCallsign: 'DoD',
      clanBannerData: {
          decalId: 4125445800,
          decalColorId: 3379387799,
          decalBackgroundColorId: 3585526343,
          gonfalonId: 1473910866,
          gonfalonColorId: 2157636323,
          gonfalonDetailId: 1681253722,
          gonfalonDetailColorId: 4112122935
      }
  }
};


export const MOCK_DB_CLAN_DETAILS: DBObject[] = [
  {
    id: 'ClanDetails',
    createDate: nowPlusDays(-10),
    data: MOCK_CLAN_OVERVIEW
  }
]

