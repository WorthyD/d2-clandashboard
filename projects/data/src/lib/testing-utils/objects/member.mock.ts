import { DBObject } from '../../clan-db/app-indexed-db';
import * as moment from 'moment';

export const MOCK_ZONED_MEMBER = {
  memberType: 5,
  isOnline: false,
  lastOnlineStatusChange: moment(new Date()).unix(),
  groupId: '2073131',
  destinyUserInfo: {
    LastSeenDisplayName: 'zonedguy',
    LastSeenDisplayNameType: 3,
    iconPath: '/img/theme/bungienet/icons/steamLogo.png',
    crossSaveOverride: 0,
    applicableMembershipTypes: [3],
    isPublic: false,
    membershipType: 3,
    membershipId: '4611686018467555002',
    displayName: 'zonedguy'
  },
  bungieNetUserInfo: {
    supplementalDisplayName: '3877062',
    iconPath: '/img/profile/avatars/bungieday_14.jpg',
    crossSaveOverride: 0,
    isPublic: false,
    membershipType: 254,
    membershipId: '3877062',
    displayName: 'zonedguy'
  },
  joinDate: '2017-10-25T02:09:31Z'
};

export const MOCK_OMEGA_MEMBER = {
  memberType: 3,
  isOnline: true,
  lastOnlineStatusChange: moment(new Date()).add(-10, 'minutes').unix(),
  groupId: '2073131',
  destinyUserInfo: {
    LastSeenDisplayName: 'OmegaDad',
    LastSeenDisplayNameType: 3,
    iconPath: '/img/theme/bungienet/icons/steamLogo.png',
    crossSaveOverride: 3,
    applicableMembershipTypes: [2, 5, 3],
    isPublic: false,
    membershipType: 3,
    membershipId: '4611686018467296647',
    displayName: 'OmegaDad'
  },
  bungieNetUserInfo: {
    supplementalDisplayName: '10482298',
    iconPath: '/img/profile/avatars/cc00009.jpg',
    crossSaveOverride: 0,
    isPublic: false,
    membershipType: 254,
    membershipId: '10482298',
    displayName: 'EMPXOmega'
  },
  joinDate: '2019-04-06T15:42:23Z'
};

export const MOCK_WORTHY_MEMBER = {
  memberType: 3,
  isOnline: false,
  lastOnlineStatusChange: moment(new Date()).add(-9, 'days').unix(),
  groupId: '2073131',
  destinyUserInfo: {
    LastSeenDisplayName: 'WorthyD',
    LastSeenDisplayNameType: 3,
    iconPath: '/img/theme/bungienet/icons/steamLogo.png',
    crossSaveOverride: 3,
    applicableMembershipTypes: [1, 2, 3],
    isPublic: false,
    membershipType: 3,
    membershipId: '4611686018467238913',
    displayName: 'WorthyD'
  },
  bungieNetUserInfo: {
    supplementalDisplayName: 'WorthyD',
    iconPath: 'https://halo.bungie.net/images/halo3stats/odst/models/buck/buck_0_0_0.png',
    crossSaveOverride: 0,
    isPublic: false,
    membershipType: 254,
    membershipId: '612698',
    displayName: 'WorthyD'
  },
  joinDate: '2019-09-15T18:11:09Z'
};

export const MOCK_DB_MEMBERS: DBObject[] = [
  {
    id: '3-4611686018469839063',
    createDate: new Date(),
    data: MOCK_ZONED_MEMBER
  },
  {
    id: '3-4611686018467296647',
    createDate: new Date(),
    data: MOCK_OMEGA_MEMBER
  },
  {
    id: '3-4611686018467238913',
    createDate: new Date(moment(new Date()).add(-10, 'days').valueOf()),
    data: MOCK_WORTHY_MEMBER
  }
];
