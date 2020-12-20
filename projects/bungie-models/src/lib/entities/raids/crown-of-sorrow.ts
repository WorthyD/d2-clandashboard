import { Raid, RaidInfo } from '../../models/Raid';

export const CrownOfSorrow: Raid = {
  hashes: [3333172150],
  key: 'cos',
  abbreviatedName: 'CoS',
  displayName: 'Crown Of Sorrow',
  sortOrder: 14,
  isGuidedGames: false,
  isVaulted: true
};

export const CrownOfSorrowGG: Raid = {
  hashes: [960175301],
  key: 'cosgg',
  abbreviatedName: 'CoS GG',
  displayName: 'Crown of Sorrow Guided Games',
  sortOrder: 15,
  isGuidedGames: true,
  isVaulted: true
};

export const CrownOfSorrowInfo: RaidInfo = {
  raid: CrownOfSorrow,
  raidGG: CrownOfSorrowGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_eclipse.jpg'
};
