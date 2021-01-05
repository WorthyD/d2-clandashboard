import { MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const ScourgeOfThePast: Raid = {
  activityHashes: [548750096],
  key: 'sotp',
  abbreviatedName: 'SotP',
  displayName: 'Scourge of the Past',
  sortOrder: 12,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 1201631538
};

export const ScourgeOfThePastGG: Raid = {
  activityHashes: [2812525063],
  key: 'sotpgg',
  abbreviatedName: 'SotP GG',
  displayName: 'Scourge of the Past Guided Games',
  sortOrder: 13,
  isGuidedGames: true,
  isVaulted: true,
  completionMetricHash: 2088761942
};

export const ScourgeOfThePastInfo: RaidInfo = {
  raid: ScourgeOfThePast,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg',
  raidGG: ScourgeOfThePastGG,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: ScourgeOfThePast.completionMetricHash,
      toolTip: 'Tracked from season 5 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 870430854
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      toolTip: 'Tracked from season 10 onward',
      hash: ScourgeOfThePastGG.completionMetricHash
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 1245368441,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: []
};
