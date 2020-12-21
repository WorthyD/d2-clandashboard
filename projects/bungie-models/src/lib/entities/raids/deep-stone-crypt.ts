import { Raid, RaidInfo } from '../../models/Raid';

export const DeepStoneCrypt: Raid = {
  hashes: [910380154],
  key: 'dsc',
  abbreviatedName: 'DSC',
  displayName: 'Deep Stone Crypt',
  sortOrder: 18,
  isGuidedGames: false,
  isVaulted: false
};

export const DeepStoneCryptGG: Raid = {
  hashes: [3976949817],
  key: 'dscgg',
  abbreviatedName: 'DSC GG',
  displayName: 'Deep Stone Crypt Guided Games',
  sortOrder: 19,
  isGuidedGames: true,
  isVaulted: false
};

export const DeepStoneCryptInfo: RaidInfo = {
  raid: DeepStoneCrypt,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/europa-raid-deep-stone-crypt.jpg',
  raidGG: DeepStoneCryptGG,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: 954805812
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      hash: 2466440160
    },
    {
      displayName: 'Carries',
      key: 'carries',
      hash: 2330596844
    },
    {
      displayName: 'Time',
      key: 'time',
      hash: 3679202587
    }
  ]
};

//910380154
// 3976949817
