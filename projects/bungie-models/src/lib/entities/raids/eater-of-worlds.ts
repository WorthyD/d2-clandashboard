import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const EaterOfWorlds: Raid = {
  activityHashes: [3089205900],
  key: 'eow',
  abbreviatedName: 'EoW',
  displayName: 'Eater of Worlds',
  sortOrder: 4,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 2659534585
};

export const EaterOfWorldsPrestige: Raid = {
  activityHashes: [809170886],
  key: 'eowp',
  abbreviatedName: 'EoW Pres',
  displayName: 'Eater of Worlds Prestige',
  sortOrder: 5,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 3284024615
};

export const EaterOfWorldsGG: Raid = {
  activityHashes: [2164432138],
  key: 'eowgg',
  abbreviatedName: 'EoW Guided',
  displayName: 'Eater of Worlds Guided Games',
  sortOrder: 6,
  isGuidedGames: true,
  isVaulted: true,
  completionMetricHash: 0
};

export const EaterOfWorldsInfo: RaidInfo = {
  raid: EaterOfWorlds,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raids_leviathan_eater_of_worlds.jpg',
  raidGG: EaterOfWorldsGG,
  raidPrestige: EaterOfWorldsPrestige,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: EaterOfWorlds.completionMetricHash,
      toolTip: 'Tracked from season 2 onward'
    },
    {
      displayName: 'Prestige Completions',
      key: 'pres-comp',
      hash: EaterOfWorldsPrestige.completionMetricHash,
      toolTip: 'Tracked from season 2 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 4071965745
    },
    // {
    //   displayName: 'Guided Games',
    //   key: 'gg',
    //   toolTip: 'Season 10 onwards',
    //   hash: 1152035282
    // },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 1275208010,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: []
};
