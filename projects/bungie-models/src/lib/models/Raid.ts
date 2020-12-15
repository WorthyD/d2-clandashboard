export interface Raid {
  displayName: string;
  abbreviatedName: string;
  key: string;
  hashes: number[];
  sortOrder: number;
  isGuidedGames: boolean;
  isVaulted: boolean;
}

export interface RaidGroup {
  raid: Raid;
  raidGG?: Raid;
  raidPrestiege?: Raid;
  raidImage: string;
}
