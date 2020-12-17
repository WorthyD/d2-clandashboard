export interface Raid {
  displayName: string;
  abbreviatedName: string;
  key: string;
  hashes: number[];
  sortOrder: number;
  isGuidedGames: boolean;
  isVaulted: boolean;
}

export interface RaidInfo {
  raid: Raid;
  raidGG?: Raid;
  raidPrestiege?: Raid;
  raidPrestiegeGG?: Raid;
  raidImage: string;
}
