import { Raid, RaidInfo } from '../../models/Raid';

export const ScourgeOfThePast: Raid = {
  hashes: [548750096],
  key: 'sotp',
  abbreviatedName: 'SotP',
  displayName: 'Scourge of the Past',
  sortOrder: 12,
  isGuidedGames: false,
  isVaulted: true
};

export const ScourgeOfThePastGG: Raid = {
  hashes: [2812525063],
  key: 'sotpgg',
  abbreviatedName: 'SotP GG',
  displayName: 'Scourge of the Past Guided Games',
  sortOrder: 13,
  isGuidedGames: true,
  isVaulted: true
};

export const ScourgeOfThePastInfo: RaidInfo = {
  raid: ScourgeOfThePast,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg',
  raidGG: ScourgeOfThePastGG
};
