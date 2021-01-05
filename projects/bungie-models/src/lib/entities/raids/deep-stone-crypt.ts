import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const DeepStoneCrypt: Raid = {
  activityHashes: [910380154],
  key: 'dsc',
  abbreviatedName: 'DSC',
  displayName: 'Deep Stone Crypt',
  sortOrder: 18,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash: 954805812
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
      toolTip: 'Tracked from season 12 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      hash: 2330596844,
      toolTip: 'Tracked from season 12 onward'
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      hash: DeepStoneCryptGG.completionMetricHash,
      toolTip: 'Tracked from season 12 onward'
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 3679202587,
      toolTip: 'Tracked from season 12 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: [
    {
      displayName: 'Eyes of Tomorrow',
      key: 'eot',
      hash: 753200559,
      displayType: GearType.weapon,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/7ae4b38a1ad247c4a7caffcd6e0a6ed9.jpg'
    },
    {
      displayName: 'No Love Lost',
      key: 'nll',
      hash: 3574313939,
      displayType: GearType.ghost,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/b73246bedf8b4237d5cd04909be64688.jpg'
    },
    {
      displayName: 'Retrocausality',
      key: 'retro',
      hash: 392272160,
      displayType: GearType.sparrow,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/777af9c51db331eba97293fb8468bc6d.jpg'
    }
  ]
};

//910380154
// 3976949817
