import { GearType, MetricDisplayType, Raid, RaidInfo } from '../../models/Raid';
/*
Activity hashes
Legend - 1441982566
??? - 2906950631
Legend - 4156879541
Master - 4217492330


Carries
2629533159
2109636080

Completions
3585185883


*/

export const VowOfTheDisciple: Raid = {
  activityHashes: [4156879541],
  key: 'vod',
  abbreviatedName: 'Vow',
  displayName: 'Vow of the Disciple',
  sortOrder: 22,
  isGuidedGames: false,
  isVaulted: false,
  completionMetricHash: 3585185883
};

export const VowOfTheDiscipleGG: Raid = {
  activityHashes: [2906950631],
  key: 'vodgg',
  abbreviatedName: 'Vow GG',
  displayName: 'Vow of the Disciple Guided Games',
  sortOrder: 21,
  isGuidedGames: true,
  completionMetricHash: 219437239,
  isVaulted: false
};

export const VowOfTheDiscipleInfo: RaidInfo = {
  raid: VowOfTheDisciple,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raid_nemesis.jpg',
  raidGG: VowOfTheDiscipleGG,
  trackedMetrics: [
    {
      displayName: 'Completions',
      key: 'comp',
      hash: VowOfTheDisciple.completionMetricHash,
      toolTip: 'Tracked from season 16 onward'
    },
    {
      displayName: 'Carries',
      key: 'carries',
      hash: 2629533159,
      toolTip: 'Tracked from season 14 onward'
    },
    {
      displayName: 'Guided Games',
      key: 'gg',
      hash: VowOfTheDiscipleGG.completionMetricHash,
      toolTip: 'Tracked from season 16 onward'
    },
    {
      displayName: 'Time Trial',
      key: 'time',
      hash: 3775579868,
      toolTip: 'Tracked from season 16 onward',
      displayType: MetricDisplayType.time
    }
  ],
  trackedGear: [
    {
      displayName: 'Collective Obligation',
      key: 'co',
      hash: 2817568609,
      displayType: GearType.weapon,
      icon: 'https://bungie.net/common/destiny2_content/icons/7f30c6ce67a72178964ecdab63592d28.jpg'
    },
    {
      displayName: 'Imperious Sun Shell',
      key: 'iss',
      hash: 3070552038,
      displayType: GearType.ghost,
      icon: 'https://bungie.net/common/destiny2_content/icons/2eff19299ee899dac8b5d8cab6e74e5d.jpg'
    },
    {
      displayName: 'Gouging Light',
      key: 'gl',
      hash: 844832867,
      displayType: GearType.sparrow,
      icon: 'https://bungie.net/common/destiny2_content/icons/074f2d2d1326ad39c61ed153de852f08.jpg'
    }
  ]
};

//910380154
// 3976949817
