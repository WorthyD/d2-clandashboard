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
  raidPrestige?: Raid;
  raidPrestigeGG?: Raid;
  raidImage: string;
  trackedMetrics?: TrackedMetric[];
}

export interface TrackedMetric {
  hash: number;
  displayName: string;
}
