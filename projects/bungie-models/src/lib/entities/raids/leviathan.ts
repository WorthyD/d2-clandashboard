import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';
export const Leviathan: Raid = {
  activityHashes: [2693136600, 2693136601, 2693136602, 2693136603, 2693136604, 2693136605],
  key: 'levi',
  abbreviatedName: 'Levi',
  displayName: 'Leviathan',
  sortOrder: 1,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 2486745106
};

export const LeviathanPrestige: Raid = {
  activityHashes: [417231112, 757116822, 1685065161, 2449714930, 3446541099, 3879860661],
  key: 'levip',
  abbreviatedName: 'Levi Pres',
  displayName: 'Leviathan Prestige',
  sortOrder: 2,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 1130423918
};

export const LeviathanGuidedGames: Raid = {
  activityHashes: [89727599, 287649202, 1699948563, 1875726950, 3916343513, 4039317196],
  key: 'levigg',
  abbreviatedName: 'Levi Guided',
  displayName: 'Leviathan Guided Games',
  sortOrder: 3,
  isGuidedGames: true,
  isVaulted: true,
  completionMetricHash: 0
};

export const LeviathanInfo: RaidInfo = {
  raid: Leviathan,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_gluttony.jpg',
  // raidGG: LeviathanGuidedGames,
  raidPrestige: LeviathanPrestige,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: Leviathan.completionMetricHash,
      toolTip: 'Tracked from season 1 onward'
    },
    {
      displayName: 'Prestige Completions',
      key: 'pres-comp',
      hash: LeviathanPrestige.completionMetricHash,
      toolTip: 'Tracked from season 1 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 4126092134
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
      hash: 3434325913,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ]
};
