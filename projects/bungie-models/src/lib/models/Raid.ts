export interface Raid {
  displayName: string;
  abbreviatedName: string;
  key: string;
  activityHashes: number[];
  sortOrder: number;
  isGuidedGames: boolean;
  isVaulted: boolean;
  completionMetricHash: number;
}

export interface RaidInfo {
  raid: Raid;
  raidGG?: Raid;
  raidPrestige?: Raid;
  raidPrestigeGG?: Raid;
  raidImage: string;
  trackedMetrics?: TrackedMetric[];
  trackedGear?: TrackedGear[];
}

export interface TrackedMetric {
  hash: number;
  key: string;
  displayName: string;
  displayType?: MetricDisplayType;
  toolTip?: string;
}

export enum MetricDisplayType {
  numeric,
  time
}

export interface TrackedGear {
  hash: number;
  key: string;
  displayName: string;
  displayType?: GearType;
  toolTip?: string;
}

export enum GearType {
  weapon,
  mod,
  ghost,
  sparrow,
  emote
}
