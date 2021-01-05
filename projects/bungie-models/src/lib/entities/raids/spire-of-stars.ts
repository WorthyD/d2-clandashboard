import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const SpireOfStars: Raid = {
  activityHashes: [119944200],
  key: 'spire',
  abbreviatedName: 'Spire',
  displayName: 'Spire of Stars',
  sortOrder: 7,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 700051716
};

export const SpireOfStarsPrestige: Raid = {
  activityHashes: [3213556450],
  key: 'spirep',
  abbreviatedName: 'Spire Pres',
  displayName: 'Spire of Stars Prestige',
  sortOrder: 8,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 3070318724
};

export const SpireOfStarsGG: Raid = {
  activityHashes: [3004605630],
  key: 'spiregg',
  abbreviatedName: 'Spire Guided',
  displayName: 'Spire of Stars Guided Games',
  sortOrder: 9,
  isGuidedGames: true,
  isVaulted: true,
  completionMetricHash: 0
};

export const SpireOfStarsInfo: RaidInfo = {
  raid: SpireOfStars,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_greed.jpg',
  // raidGG: SpireOfStarsGG,
  raidPrestige: SpireOfStarsPrestige,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: SpireOfStars.completionMetricHash,
      toolTip: 'Tracked from season 3 onward'
    },
    {
      displayName: 'Prestige Completions',
      key: 'pres-comp',
      hash: SpireOfStarsPrestige.completionMetricHash,
      toolTip: 'Tracked from season 3 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 3069033980
    },
    // {
    //   displayName: 'Guided Games',
    //   key: 'gg',
    //   toolTip: 'Season 10 onwards',
    //   hash:
    // },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 2842037131,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: [
    {
      displayName: 'Luxurious Toast',
      key: 'lt',
      hash: 1866399776,
      displayType: GearType.emote,
      icon: 'https://bungie.net/common/destiny2_content/icons/01b8ba5d2faf06d6207d945d9f1e6cb1.jpg'
    }
  ]
};
