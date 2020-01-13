import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap, distinctUntilChanged, first, take, filter, withLatestFrom } from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api';
import { ManifestDatabaseService } from './services/manifest-database.service';
import { NGXLogger } from 'ngx-logger';

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
    constructor(
        private d2service: Destiny2Service,
        private db: ManifestDatabaseService,
        private logger: NGXLogger,
        private http: HttpClient
    ) {}
    requireDatabasePromise;

    private getManifest(language: string) {
        return this.d2service.destiny2GetDestinyManifest().pipe(
            map(response => {
                //this.logger.info('done');
                //this.logger.info(response);
                return response.Response.jsonWorldContentPaths[language];
            })
        );
    }

    private allDataFromRemote(dbPath, tablesNames, progressCb) {
        this.logger.info(dbPath);
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
        this.logger.info('Requesting fresh definitions archive', { dbPath });

        return this.db.getValues('manifest').allData.pipe(
            take(1),
            switchMap(cachedValue => {
                const versionKey = `${VERSION}:${dbPath}`;
                this.logger.info('got manifest', cachedValue);

                if (cachedValue && cachedValue.length > 0) {
                    this.logger.info('Archive was already cached, returning that', cachedValue);
                    return cachedValue;
                }

                return fetch(`https://www.bungie.net${dbPath}`).then(x => {
                    return x.json().then(y => {
                        this.logger.info('Manifest Received', y);
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
    onDownloadProgress(progress) {
        const perc = Math.round((progress.loaded / progress.total) * 100);
        this.logger.log(`Definitions archive download progress ${perc}% . `);
    }
    public loadManifestData(language: string = 'en', tableNames, progressCallback, completeCallback): Observable<CachedManifest> {
        this.logger.info('getting more manifest');
        return this.db.getValues('manifest').allData.pipe(
            switchMap(x => {
                this.logger.info('getting stuff', x);
                // Logic

                return this.getManifest(language).pipe(
                    switchMap(path => {
                        if (progressCallback) {
                            progressCallback({ status: DOWNLOADING });
                        }
                        this.logger.info(path);

                        return this.allDataFromRemote(path, tableNames, progressCallback).pipe(
                            map(definitions => {
                                console.log('manifest done');
                                console.log(definitions);

                                return definitions;
                            })
                        );
                    })
                );
            })
        );
    }
}
