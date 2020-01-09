import { Injectable } from '@angular/core';

import { catchError, map, switchMap, tap, distinctUntilChanged, first, take, filter, withLatestFrom } from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api';
import { ManifestDatabaseService } from './services/manifest-database.service';
import { NGXLogger } from 'ngx-logger';

// import { requireDatabase, getAllRecords } from './database';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse, HttpRequest } from '@angular/common/http';

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
                this.logger.info('done');
                this.logger.info(response);
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
            map(cachedValue => {
                const versionKey = `${VERSION}:${dbPath}`;
                this.logger.info('got manifest', cachedValue);

                if (cachedValue) {
                    this.logger.info('Archive was already cached, returning that');
                    return cachedValue;
                }

                return fetch(`https://www.bungie.net${dbPath}`).then(x => {
                    x.json().then(y => {
                        const prunedTables = this.pruneTables(y, tableNames);
                        this.db.update('manifest', 'allData', [{ id: versionKey, data: prunedTables }]);
                        // TODO: Clean up old DB

                        return prunedTables;
                    });
                });
            })
        );
    }
    onDownloadProgress(progress) {
        const perc = Math.round((progress.loaded / progress.total) * 100);
        this.logger.log(`Definitions archive download progress ${perc}% . `);
    }
    public loadManifestData(language: string = 'en', tableNames, progressCallback, completeCallback) {
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
