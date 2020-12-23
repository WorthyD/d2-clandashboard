import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const GardenOfSalvation: Raid = {
  hashes: [2659723068],
  key: 'gos',
  abbreviatedName: 'GoS',
  displayName: 'Garden of Salvation',
  sortOrder: 16,
  isGuidedGames: false,
  isVaulted: false
};

export const GardenOfSalvationGG: Raid = {
  hashes: [3845997235],
  key: 'gosgg',
  abbreviatedName: 'GoS GG',
  displayName: 'Garden of Salvation Guided Games',
  sortOrder: 17,
  isGuidedGames: true,
  isVaulted: false
};

export const GardenOfSalvationInfo: RaidInfo = {
  raid: GardenOfSalvation,
  raidGG: GardenOfSalvationGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_garden_of_salvation.jpg',
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: 1168279855
    },
    {
      displayName: 'Carries',
      key: 'carries',
      hash: 3331373451
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      hash: 2337847483
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 1835852368,
      displayType: MetricDisplayType.time
    }
  ]
};
