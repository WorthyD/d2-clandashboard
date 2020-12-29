import { openDB, deleteDB, IDBPDatabase } from 'idb';
import { ReplaySubject, Subject } from 'rxjs';
import { BaseAppIndexedDb } from './base-indexed-db';

const DB_VERSION = 1;

export type StoreId = 'manifestBlob' | 'allData';

export const STORE_IDS: StoreId[] = ['manifestBlob', 'allData'];

// TODO: Add Angular decorator.
export class AppIndexedDb extends BaseAppIndexedDb {
  // initialValues: { [key in StoreId]?: Subject<any[]> } = {};

  // name: string;

  // private db: Promise<IDBPDatabase>;

  // private destroyed = new Subject();

  constructor(name: string) {
    // console.log(' constructor new db', name);
    // STORE_IDS.forEach((id) => (this.initialValues[id] = new ReplaySubject<any[]>(1)));
    // this.name = name;
    // this.openDb();
    super(name, DB_VERSION, STORE_IDS);
  }

  // close() {
  //   return this.db.then((db) => db.close());
  // }

  // removeData() {
  //   this.db
  //     .then((db) => {
  //       db.close();
  //       return deleteDB(this.name);
  //     })
  //     .then(() => this.openDb());
  // }

  // updateValues(values: any[], collectionId: string) {
  //   return this.db.then((db) => {
  //     const transaction = db.transaction(collectionId, 'readwrite');
  //     const store = transaction.objectStore(collectionId);
  //     values.forEach((v) => store.put(v));
  //     return transaction.done;
  //   });
  // }

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
  //   console.log('opening');
  //   this.db = openDB(this.name, DB_VERSION, {
  //     upgrade(db, oldVersion, newVersion, transaction) {
  //       console.log('upgrading');
  //       STORE_IDS.forEach((collectionId) => {
  //         if (!db.objectStoreNames.contains(collectionId)) {
  //           const objectStore = db.createObjectStore(collectionId, {
  //             keyPath: 'id'
  //           });
  //         }
  //       });
  //     }
  //   });
  //   this.db.then(() => {
  //     console.log('initing');
  //     return this.initializeAllValues();
  //   });
  // }

  // private initializeAllValues() {
  //   STORE_IDS.forEach((id) => {
  //     this.db
  //       .then((db) => db.transaction(id, 'readonly').objectStore(id).getAll())
  //       .then((result) => {
  //         const initialValues = this.initialValues[id];
  //         if (!initialValues) {
  //           throw Error('Object store not initialized :' + id);
  //         }
  //         initialValues.next(result);
  //       });
  //   });
  // }
}
