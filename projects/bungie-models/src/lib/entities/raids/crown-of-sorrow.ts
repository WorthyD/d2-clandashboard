import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';

export const CrownOfSorrow: Raid = {
  activityHashes: [3333172150],
  key: 'cos',
  abbreviatedName: 'CoS',
  displayName: 'Crown Of Sorrow',
  sortOrder: 14,
  isGuidedGames: false,
  isVaulted: true,
  completionMetricHash: 1815425870
};

export const CrownOfSorrowGG: Raid = {
  activityHashes: [960175301],
  key: 'cosgg',
  abbreviatedName: 'CoS GG',
  displayName: 'Crown of Sorrow Guided Games',
  sortOrder: 15,
  isGuidedGames: true,
  isVaulted: true,
  completionMetricHash: 1152035282
};

export const CrownOfSorrowInfo: RaidInfo = {
  raid: CrownOfSorrow,
  raidGG: CrownOfSorrowGG,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_eclipse.jpg',
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: CrownOfSorrow.completionMetricHash,
      toolTip: 'Tracked from season 7 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      toolTip: 'Tracked from season 10 onward',
      hash: 4154960946
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      toolTip: 'Tracked from season 10 onward',
      hash: CrownOfSorrowGG.completionMetricHash
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 996516677,
      toolTip: 'Tracked from season 10 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: [
    {
      displayName: 'Tarrabah',
      key: 'tarr',
      hash: 2329697053,
      displayType: GearType.weapon,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/ce6bd07715a082bad0ba946f5f8dca5e.jpg'
    },
    {
      displayName: 'Shadow of Earth',
      key: 'soe',
      hash: 753635605,
      displayType: GearType.ghost,
      icon: 'https://www.bungie.net/common/destiny2_content/icons/9d647709892eaaa29b2d51923618512f.jpg'
    },


  ]
};
