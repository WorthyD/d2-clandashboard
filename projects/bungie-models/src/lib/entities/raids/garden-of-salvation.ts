import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const GardenOfSalvation: Raid = {
  activityHashes: [2659723068],
  key: 'gos',
  abbreviatedName: 'GoS',
  displayName: 'Garden of Salvation',
  sortOrder: 16,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash: 1168279855
};

export const GardenOfSalvationGG: Raid = {
  activityHashes: [3845997235],
  key: 'gosgg',
  abbreviatedName: 'GoS GG',
  displayName: 'Garden of Salvation Guided Games',
  sortOrder: 17,
  isGuidedGames: true,
  isVaulted: false,
  completionMetricHash: 2337847483
};

export const GardenOfSalvationInfo: RaidInfo = {
  raid: GardenOfSalvation,
  raidGG: GardenOfSalvationGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_garden_of_salvation.jpg',
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      toolTip: 'Tracked from season 8 onward',
      hash: GardenOfSalvation.completionMetricHash
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 3331373451
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      toolTip: 'Tracked from season 10 onward',
      hash: GardenOfSalvationGG.completionMetricHash
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      toolTip: 'Tracked from season 10 onward',
      hash: 1835852368,
      displayType: MetricDisplayType.time
    }
  ]
};
