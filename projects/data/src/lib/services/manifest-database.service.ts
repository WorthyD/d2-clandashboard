import { Injectable } from '@angular/core';
import { AppIndexedDb, StoreId } from '../utility/app-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class ManifestDatabaseService {
  private database: AppIndexedDb;

  getValues(repository: string): Promise<any[]> {
    return this.getDatabase(repository).getAllData('allData');
  }

  update(repository: string, type: StoreId, entities: any[]): Promise<void> {
    return this.getDatabase(repository).updateValues(entities, type);
  }

  remove(repository: string, type: StoreId, ids: string[]): Promise<void> {
    return this.getDatabase(repository).removeValues(ids, type);
  }

  removeAll(repository: string, type: StoreId) {
    return this.getDatabase(repository).removeAllValues(type);
  }

  private getDatabase(repository: string) {
    console.log('getting database', repository);
    if (this.database && this.database.name === repository) {
      console.log('db found', repository);
      return this.database;
    }

    if (this.database) {
      this.database.close();
    }

    this.database = new AppIndexedDb(repository);
    //console.log(this.database);
    return this.database;
  }
}
