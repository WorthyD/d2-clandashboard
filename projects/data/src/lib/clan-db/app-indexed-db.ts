import { openDB, deleteDB, IDBPDatabase } from 'idb';
import { ReplaySubject, Subject } from 'rxjs';

const DB_VERSION = 1;

// TODO: Use enum
export type StoreId =
  | 'CacheDetails'
  | 'ClanDetails'
  //| 'ClanMembers'
  | 'ClanRewards'
  | 'MemberProfiles'
  | 'MemberActivities'
  | 'ProfileMilestones';

export const STORE_IDS: StoreId[] = [
  'CacheDetails',
  'ClanDetails',
  // 'ClanMembers',
  'ClanRewards',
  'MemberProfiles',
  'MemberActivities',
  'ProfileMilestones'
];

export interface DBObject {
  id: string;
  data: any;
  createDate: Date;
}

export class AppIndexedDb {
  //initialValues: { [key in StoreId]?: Subject<DBObject[]> } = {};
  initialValues: { [key in StoreId]?: Subject<any[]> } = {};

  name: string;

  private db: Promise<IDBPDatabase>;

  private destroyed = new Subject();

  constructor(name: string, initializeValues: boolean = true) {
    console.log('constructing');
    if (initializeValues) {
      this.resetInitialValues();
    }
    this.name = name;
    this.openDb();
  }

  close() {
    console.log('closing');
    return this.db.then((db) => db.close());
  }

  private resetInitialValues() {
    STORE_IDS.forEach((id) => (this.initialValues[id] = new ReplaySubject<DBObject[]>(1)));
  }

  getAllData(store: StoreId) {
    return this.db.then((db) => {
      return db.transaction(store, 'readonly').objectStore(store).getAll();
    });
  }

  getById(store: StoreId, id) {
    return this.db.then((db) => {
      return db.transaction(store, 'readonly').objectStore(store).get(id);
    });
  }

  removeData() {
    console.log('remove data');
    this.db
      .then((db) => {
        this.resetInitialValues();
        db.close();
        return deleteDB(this.name);
      })
      .then(() => this.openDb());
  }

  purgeDatabase() {
    console.log('purge');
    return this.close().then((db) => {
      console.log('close done');
      return deleteDB(this.name);
    });
  }

  updateValues(values: DBObject[], collectionId: string) {
    return this.db.then((db) => {
      const transaction = db.transaction(collectionId, 'readwrite');
      const store = transaction.objectStore(collectionId);
      values.forEach((v) => store.put(v));
      return transaction.done;
    });
  }

  removeValues(ids: string[], collectionId: string) {
    return this.db.then((db) => {
      const transaction = db.transaction(collectionId, 'readwrite');
      const store = transaction.objectStore(collectionId);
      ids.forEach((id) => store.delete(id));
      return transaction.done;
    });
  }

  removeAllValues(collectionId: string) {
    return this.db.then((db) => {
      const transaction = db.transaction(collectionId, 'readwrite');
      const store = transaction.objectStore(collectionId);
      return store.clear();
    });
  }

  private openDb() {
    console.log('re opening');
    this.db = openDB(this.name, DB_VERSION, {
      upgrade(db, oldVersion, newVersion, transaction) {
        STORE_IDS.forEach((collectionId) => {
          if (!db.objectStoreNames.contains(collectionId)) {
            const objectStore = db.createObjectStore(collectionId, {
              keyPath: 'id'
            });

            //if (this.name === 'angular/components') {
            // initializeDemoConfig(collectionId, objectStore);
            // }
          }
        });
      }
    });
    this.db.then(() => this.initializeAllValues());
  }

  private initializeAllValues() {
    console.log('initializing');
    STORE_IDS.forEach((id) => {
      this.db
        .then((db) => db.transaction(id, 'readonly').objectStore(id).getAll())
        .then((result) => {
          const initialValues = this.initialValues[id];
          if (!initialValues) {
            throw Error('Object store not initialized :' + id);
          }
          initialValues.next(result);
        });
    });
  }
}
