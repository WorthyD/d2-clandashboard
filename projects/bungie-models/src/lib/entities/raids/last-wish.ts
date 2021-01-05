import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

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
  trackedGear: []
};
