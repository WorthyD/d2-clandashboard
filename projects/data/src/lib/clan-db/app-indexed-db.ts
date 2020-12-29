import { BaseAppIndexedDb } from '../utility/base-indexed-db';

const DB_VERSION = 5;

export enum StoreId {
  CacheDetails = 'CacheDetails',
  ClanDetails = 'ClanDetails',
  ClanRewards = 'ClanRewards',
  MemberProfiles = 'MemberProfiles',
  MemberActivities = 'MemberActivities',
  MemberActivityStats = 'MemberActivityStats',
  MemberRecentActivities = 'MemberRecentActivities',
  ProfileMilestones = 'ProfileMilestones',
  ProfileMetrics = 'ProfileMetrics',
  Raids = 'Raids'
}

export const STORE_IDS: StoreId[] = [
  StoreId.CacheDetails,
  StoreId.ClanDetails,
  StoreId.ClanRewards,
  StoreId.MemberProfiles,
  StoreId.MemberActivities,
  StoreId.MemberRecentActivities,
  StoreId.ProfileMilestones,
  StoreId.MemberActivityStats,
  StoreId.ProfileMetrics,
  StoreId.Raids
];

export interface DBObject {
  id: string;
  data: any;
  createDate: Date;
}

export class AppIndexedDb extends BaseAppIndexedDb {
  constructor(name: string, initializeValues: boolean = true) {
    super(name, DB_VERSION, STORE_IDS, initializeValues);
  }

  getAllData(store: StoreId) {
    return super.getAllData(store);
  }

  getById(store: StoreId, id) {
    return super.getById(store, id);
  }

  updateValues(values: DBObject[], collectionId: string) {
    return super.updateValues(values, collectionId);
  }
}
