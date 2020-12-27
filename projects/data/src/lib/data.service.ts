import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api-angular';
import { ManifestDatabaseService } from './services/manifest-database.service';

import { CachedManifest } from './models/CachedManifest';
import { NGXLogger } from 'ngx-logger';
import { WindowToken } from './injection-tokens/window-token';

const DOWNLOADING = 'downloading manifest';
export const STATUS_EXTRACTING_TABLES = 'extracting tables';
export const STATUS_UNZIPPING = 'unzipping';
export const STATUS_DONE = 'done';

const VERSION = 'v1';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(WindowToken) private window: Window, private d2service: Destiny2Service, private db: ManifestDatabaseService) {}

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
    return this.db.getValues('manifest').allData.pipe(
      switchMap((cachedValue) => {
        const versionKey = `${VERSION}:${dbPath}`;
        console.log('object', cachedValue);

        if (cachedValue && cachedValue.length > 0) {
          console.log('returning cached valuye');
          return cachedValue;
        }

        return fetch(`https://www.bungie.net${dbPath}`).then((x) => {
          return x.json().then((y) => {
            const prunedTables = this.pruneTables(y, tableNames);
            const dbObject = { id: versionKey, data: prunedTables };
            this.db.update('manifest', 'allData', [dbObject]);
            // TODO: Clean up old DB

            return dbObject;
          });
        });
      })
    );
  }

  public loadManifestData(language: string = 'en', tableNames): Observable<CachedManifest> {
    return this.db.getValues('manifest').allData.pipe(
      switchMap((x) => this.getManifest(language)),
      switchMap((path) => this.requestDefinitionsArchive(path, tableNames)),
      map((definitions) => {
        console.log(definitions);
        return definitions;
      })
    );
  }
}
