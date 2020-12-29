import { openDB, deleteDB, IDBPDatabase } from 'idb';
import { ReplaySubject, Subject } from 'rxjs';
import { BaseAppIndexedDb } from '../utility/base-indexed-db';

const DB_VERSION = 4;

export enum StoreId {
  CacheDetails = 'CacheDetails',
  ClanDetails = 'ClanDetails',
  ClanRewards = 'ClanRewards',
  MemberProfiles = 'MemberProfiles',
  MemberActivities = 'MemberActivities',
  MemberActivityStats = 'MemberActivityStats',
  MemberRecentActivities = 'MemberRecentActivities',
  ProfileMilestones = 'ProfileMilestones',
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
  StoreId.Raids
];

export interface DBObject {
  id: string;
  data: any;
  createDate: Date;
}

export class AppIndexedDb extends BaseAppIndexedDb {
  // name: string;

  // private db: Promise<IDBPDatabase>;

  constructor(name: string, initializeValues: boolean = true) {
    // if (initializeValues) {
    //   this.resetInitialValues();
    // }
    // this.name = name;
    // this.openDb();
    super(name, DB_VERSION, STORE_IDS, initializeValues);
  }

  // close() {
  //   return this.db.then((db) => db.close());
  // }

  //private resetInitialValues() {}

  getAllData(store: StoreId) {
    return super.getAllData(store);
  }

  getById(store: StoreId, id) {
    return super.getById(store, id);
  }

  // purgeDatabase() {
  //   return this.close().then((db) => {
  //     return deleteDB(this.name);
  //   });
  // }

  updateValues(values: DBObject[], collectionId: string) {
    return super.updateValues(values, collectionId);
  }

  // removeValues(ids: string[], collectionId: string) {
  //   return this.db.then((db) => {
  //     const transaction = db.transaction(collectionId, 'readwrite');
  //     const store = transaction.objectStore(collectionId);
  //     ids.forEach((id) => store.delete(id));
  //     return transaction.done;
  //   });
  // }

  // removeAllValues(collectionId: string) {
  //   return this.db.then((db) => {
  //     const transaction = db.transaction(collectionId, 'readwrite');
  //     const store = transaction.objectStore(collectionId);
  //     return store.clear();
  //   });
  // }

  // private openDb() {
  //   this.db = openDB(this.name, DB_VERSION, {
  //     upgrade(db, oldVersion, newVersion, transaction) {
  //       STORE_IDS.forEach((collectionId) => {
  //         if (!db.objectStoreNames.contains(collectionId)) {
  //           const objectStore = db.createObjectStore(collectionId, {
  //             keyPath: 'id'
  //           });
  //         }
  //       });
  //     }
  //   });
  // }
}
