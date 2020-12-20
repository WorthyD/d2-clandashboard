import { Raid, RaidInfo } from '../../models/Raid';

export const LastWish: Raid = {
  hashes: [2122313384],
  key: 'lw',
  abbreviatedName: 'Last Wish',
  displayName: 'Last Wish',
  sortOrder: 10,
  isGuidedGames: false,
  isVaulted: false
};

export const LastWishGG: Raid = {
  hashes: [1661734046],
  key: 'lwgg',
  abbreviatedName: 'Last Wish GG',
  displayName: 'Last Wish Guided Games',
  sortOrder: 11,
  isGuidedGames: true,
  isVaulted: false
};

export const LastWishInfo: RaidInfo = {
  raid: LastWish,
  raidGG: LastWishGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_beanstalk.jpg'
};
