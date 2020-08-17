import { Injectable } from '@angular/core';
import { AppIndexedDb, StoreId, DBObject } from './app-indexed-db';

@Injectable()
export class ClanDatabase {
  private database: AppIndexedDb;

  // getValues(repository: string) {
  //   return this.getDatabase(repository).initialValues;
  // }

  getById(repository: string, type: StoreId, id: string): Promise<DBObject> {
    console.log('----------------------------');
    return this.getDatabase(repository).getById(type, id);
  }

  update(repository: string, type: StoreId, entities: any[]): Promise<void> {
    console.log('----------------------------');
    return this.getDatabase(repository).updateValues(entities, type);
  }

  remove(repository: string, type: StoreId, ids: string[]): Promise<void> {
    console.log('----------------------------');
    return this.getDatabase(repository).removeValues(ids, type);
  }

  removeAll(repository: string, type: StoreId) {
    console.log('----------------------------');
    return this.getDatabase(repository).removeAllValues(type);
  }

  deleteDatabase(repository: string) {
    console.log('----------------------------');
    return this.getDatabase(repository, false).purgeDatabase();
  }

  private getDatabase(repository: string, initializeValues: boolean = true) {
    console.log('----------------------------');
    if (this.database && this.database.name === repository) {
      return this.database;
    }

    if (this.database) {
      this.database.close();
    }

    this.database = new AppIndexedDb(repository, initializeValues);
    return this.database;
  }
}
