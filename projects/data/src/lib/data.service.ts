import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  distinctUntilChanged,
  first,
  take,
  filter,
  withLatestFrom
} from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api-angular';
import { ManifestDatabaseService } from './services/manifest-database.service';

// import { requireDatabase, getAllRecords } from './database';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse, HttpRequest } from '@angular/common/http';
import { CachedManifest } from './models/CachedManifest';

const DOWNLOADING = 'downloading manifest';
export const STATUS_EXTRACTING_TABLES = 'extracting tables';
export const STATUS_UNZIPPING = 'unzipping';
export const STATUS_DONE = 'done';

const VERSION = 'v1';
/*
[
                                'DestinyChecklistDefinition',
                                'DestinyObjectiveDefinition',
                                'DestinyStatDefinition',
                                'DestinyVendorDefinition',
                                'DestinyInventoryItemDefinition',
                                'DestinyClassDefinition',
                                'DestinySandboxPerkDefinition',
                                'DestinyEnergyTypeDefinition',
                                'DestinyCollectibleDefinition',
                                'DestinyPresentationNodeDefinition',
                                'DestinyRecordDefinition',
                                'DestinyActivityModeDefinition',
                                'DestinyPlaceDefinition',
                                'DestinyFactionDefinition'
                            ]
                            */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private d2service: Destiny2Service, private db: ManifestDatabaseService) {}

  private getManifest(language: string) {
    return this.d2service.destiny2GetDestinyManifest().pipe(
      map((response) => {
        return response.Response.jsonWorldContentPaths[language];
      })
    );
  }

  private allDataFromRemote(dbPath, tablesNames) {
    return this.requestDefinitionsArchive(dbPath, tablesNames);
  }

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

        if (cachedValue && cachedValue.length > 0) {
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
      switchMap((path) => this.allDataFromRemote(path, tableNames)),
      map((definitions) => definitions)
    );
  }
}
