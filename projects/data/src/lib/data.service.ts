import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api-angular';
import { ManifestDatabaseService } from './services/manifest-database.service';

import { CachedManifest } from './models/CachedManifest';
import { NGXLogger } from 'ngx-logger';

const DOWNLOADING = 'downloading manifest';
export const STATUS_EXTRACTING_TABLES = 'extracting tables';
export const STATUS_UNZIPPING = 'unzipping';
export const STATUS_DONE = 'done';

const VERSION = 'v1';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private d2service: Destiny2Service,
    private db: ManifestDatabaseService
  ) {}

  private getManifest(language: string) {
    return this.d2service.destiny2GetDestinyManifest().pipe(
      map((response) => {
        return response.Response.jsonWorldContentPaths[language];
      })
    );
  }

  // private allDataFromRemote(dbPath, tablesNames) {
  //   return this.requestDefinitionsArchive(dbPath, tablesNames);
  // }

  pruneTables(obj, keys) {
    if (!keys.length) {
      return obj;
    }

    return keys.reduce((acc, key) => {
      return {
        ...acc,
        [key]: obj[key]
      };
    }, {});
  }

  requestDefinitionsArchive(dbPath, tableNames) {
    return this.db.getValues('manifest').then((cachedValue) => {
      const versionKey = `${VERSION}:${dbPath}`;

      if (cachedValue && cachedValue.length > 0 && cachedValue.find((x) => x.id === versionKey)) {
        this.db.closeDatabase('manifest');
        return cachedValue.find((x) => x.id === versionKey);
      }

      return fetch(`https://www.bungie.net${dbPath}`).then((x) => {
        return x.json().then((y) => {
          const prunedTables = this.pruneTables(y, tableNames);
          const dbObject = { id: versionKey, data: prunedTables };
          this.db.update('manifest', 'allData', [dbObject]).then((db) => {
            this.db.closeDatabase('manifest');
          });

          return dbObject;
        });
      });
    });
  }

  public loadManifestData(language: string = 'en', tableNames): Promise<CachedManifest> {
    return this.getManifest(language)
      .toPromise()
      .then((path) => this.requestDefinitionsArchive(path, tableNames));
  }
}
