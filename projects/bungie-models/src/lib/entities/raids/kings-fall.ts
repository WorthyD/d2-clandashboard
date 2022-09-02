import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';
/*
Activity hashes



*/

export const KingsFall: Raid = {
  activityHashes: [1374392663],
  key: 'kf',
  abbreviatedName: 'Fall',
  displayName: 'Kings Fall',
  sortOrder: 22,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash: 1624029217
};

export const VowOfTheDiscipleGG: Raid = {
  activityHashes: [2906950631],
  key: 'kf',
  abbreviatedName: 'Vow GG',
  displayName: 'Vow of the Disciple Guided Games',
  sortOrder: 21,
  isGuidedGames: true,
  completionMetricHash: 219437239,
  isVaulted: false
};

export const KingsFallInfo: RaidInfo = {
  raid: KingsFall,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_kings_fall.jpg',
  //raidGG: VowOfTheDiscipleGG,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: KingsFall.completionMetricHash,
    },
  ],
  trackedGear: [
    {
      displayName: 'Touch of Malice',
      key: 'co',
      hash: 192937277 ,
      displayType: GearType.weapon,
      icon: 'https://bungie.net/common/destiny2_content/icons/e66db91c6b70862b64c35a4fd087c973.jpg'
    },
  ]
};

//910380154
// 3976949817
