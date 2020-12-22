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
  key: string;
  displayName: string;
  displayType?: MetricDisplayType;
}

export enum MetricDisplayType {
  numeric,
  time
}
