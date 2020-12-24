import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const DeepStoneCrypt: Raid = {
  activityHashes: [910380154],
  key: 'dsc',
  abbreviatedName: 'DSC',
  displayName: 'Deep Stone Crypt',
  sortOrder: 18,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash:954805812
};

export const DeepStoneCryptGG: Raid = {
  activityHashes: [3976949817],
  key: 'dscgg',
  abbreviatedName: 'DSC GG',
  displayName: 'Deep Stone Crypt Guided Games',
  sortOrder: 19,
  isGuidedGames: true,
  completionMetricHash: 2466440160,
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
      hash: DeepStoneCrypt.completionMetricHash,
      toolTip: 'Tracked from season 12 onward',
    },
    {
      displayName: 'Carries',
      key: 'carries',
      hash: 2330596844,
      toolTip: 'Tracked from season 12 onward',
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      hash: DeepStoneCryptGG.completionMetricHash,
      toolTip: 'Tracked from season 12 onward',
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 3679202587,
      toolTip: 'Tracked from season 12 onward',
      displayType: MetricDisplayType.time
    }
  ]
};

//910380154
// 3976949817
