import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const LastWish: Raid = {
  activityHashes: [2122313384],
  key: 'lw',
  abbreviatedName: 'Last Wish',
  displayName: 'Last Wish',
  sortOrder: 10,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash: 905240985
};

export const LastWishGG: Raid = {
  activityHashes: [1661734046],
  key: 'lwgg',
  abbreviatedName: 'Last Wish GG',
  displayName: 'Last Wish Guided Games',
  sortOrder: 11,
  isGuidedGames: true,
  isVaulted: false,
  completionMetricHash: 2657968781
};

export const LastWishInfo: RaidInfo = {
  raid: LastWish,
  raidGG: LastWishGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_beanstalk.jpg',
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      toolTip: 'Tracked from season 4 onward',
      hash: LastWish.completionMetricHash
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 1139173585
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      toolTip: 'Tracked from season 10 onward',
      hash: LastWishGG.completionMetricHash
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 4164362538,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: [
    {
      displayName: 'One Thousand Voices',
      key: 'onekay',
      hash: 199171385,
      displayType: GearType.weapon,
      icon: 'https://bungie.net/common/destiny2_content/icons/0421f2a3fdff6fd946f7e20951b08876.jpg'
    },
    {
      displayName: 'Wish-Maker Shell',
      key: 'wms',
      hash: 3360537485,
      displayType: GearType.ghost,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/c29195cba3a2570c43e4013d9c03d230.jpg'
    },
    {
      displayName: 'Ermine TAC-717',
      key: 'erm',
      hash: 3163873693,
      displayType: GearType.ship,
      icon: 'https://bungie.net/common/destiny2_content/icons/c85f617536f6f0cf14f591e6e67c2d78.jpg'
    },
    {
      displayName: 'Cleansing Knife',
      key: 'knife',
      hash: 1469913804,
      displayType: GearType.sparrow,
      icon: 'https://bungie.net/common/destiny2_content/icons/1fdad47579f1ac76e77524a3c9ef2e09.jpg'
    }
  ]
};
