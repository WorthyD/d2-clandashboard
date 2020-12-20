import { Raid, RaidInfo } from '../../models/Raid';

export const EaterOfWorlds: Raid = {
  hashes: [3089205900],
  key: 'eow',
  abbreviatedName: 'EoW',
  displayName: 'Eater of Worlds',
  sortOrder: 4,
  isGuidedGames: false,
  isVaulted: true
};

export const EaterOfWorldsPrestige: Raid = {
  hashes: [809170886],
  key: 'eowp',
  abbreviatedName: 'EoW Pres',
  displayName: 'Eater of Worlds Prestige',
  sortOrder: 5,
  isGuidedGames: false,
  isVaulted: true
};

export const EaterOfWorldsGG: Raid = {
  hashes: [2164432138],
  key: 'eowgg',
  abbreviatedName: 'EoW Guided',
  displayName: 'Eater of Worlds Guided Games',
  sortOrder: 6,
  isGuidedGames: true,
  isVaulted: true
};

export const EaterOfWorldsInfo: RaidInfo = {
  raid: EaterOfWorlds,
  raidImage: 'https://www.bungie.net/img/destiny_content/pgcr/raids_leviathan_eater_of_worlds.jpg',
  raidGG: EaterOfWorldsGG,
  raidPrestige: EaterOfWorldsPrestige
};
