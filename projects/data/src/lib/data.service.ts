import { Injectable } from '@angular/core';

/*
// Todo: convert to normal modules
import zip from 'file-loader!@destiny-item-manager/zip.js/WebContent/zip.js'; // eslint-disable-line
import inflate from 'file-loader!@destiny-item-manager/zip.js/WebContent/inflate.js'; // eslint-disable-line
import zipWorker from 'file-loader!@destiny-item-manager/zip.js/WebContent/z-worker.js'; // eslint-disable-line
*/
import { zip, inflate, zipWorker } from '@destiny-item-manager/zip.js';

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
        // if (!this.requireDatabasePromise) {
        //     this.requireDatabasePromise = null; /// requireDatabase();
        // }
        // return null;

        return this.requestDefinitionsArchive(dbPath);

        // return definitions.

        // return Promise.all([this.loadDefinitions(dbPath, progressCb)])
        //     .then(([databaseBlob]) => {
        //         if (progressCb) {
        //             progressCb({ status: STATUS_EXTRACTING_TABLES });
        //         }
        //         this.logger.info('Loaded both SQL library and definitions database');
        //         console.log(databaseBlob);
        //         //return this.openDBFromBlob(null, databaseBlob);
        //         return this.openDBFromBlob(
        //     })
        //     .then(db => {
        //         this.logger.info(db);
        //         this.logger.info('Opened database as SQLite DB object');

        //         // const tablesToRequest =
        //         //     tablesNames || db.exec(`SELECT name FROM sqlite_master WHERE type='table';`)[0].values.map(a => a[0]);

        //         // this.logger.info('Extracting tables from definitions database', tablesToRequest);

        //         // const allData = tablesToRequest.reduce((acc, tableName) => {
        //         //     this.logger.info('Getting all records for', tableName);

        //         //     return {
        //         //         ...acc,
        //         //         [tableName]: getAllRecords(db, tableName)
        //         //     };
        //         // }, {});
        //         return null;

        //         //return allData;
        //     })
        //     .catch(err => {
        //         //TODO: Fix memory issue with SQLLib or more gracefully handle failure
        //         window.location.reload();
        //         //without throwing an error the data becomes corrupted
        //         throw err;
        //     });
    }
    // loadDefinitions(dbPath, progressCb) {
    //     this.logger.info('Load Defininitions', dbPath);
    //     return this.requestDefinitionsArchive(dbPath)
    //         .pipe(
    //             take(1),
    //             map(data => {
    //                 this.logger.info('Successfully downloaded definitions archive');
    //                 progressCb({ status: STATUS_UNZIPPING });
    //                 return this.unzipManifest(data);
    //             })
    //         )
    //         .pipe(
    //             take(1),
    //             map(manifestBlob => {
    //                 this.logger.info('Successfully unzipped definitions archive');
    //                 return manifestBlob;
    //             })
    //         );
    // }

    onDownloadProgress(progress) {
        const perc = Math.round((progress.loaded / progress.total) * 100);
        this.logger.info(`Definitions archive download progress ${perc}% . `);
    }
    requestDefinitionsArchive(dbPath) {
        this.logger.info('Requesting fresh definitions archive', { dbPath });

        return this.db.getValues('manifest').manifestBlob.pipe(
            take(1),
            map(cachedValue => {
                this.logger.info('got manifest', cachedValue);
                // dbPath = '/common/destiny2_content/sqlite/en/world_sql_content_d470daec6f7a006faeec4a1b921c3b61.content';
                /*
                if (cachedValue) {
                    this.logger.info('Archive was already cached, returning that');
                    return null;
                    //return cachedValue.data;
                }
                */

                // return this.http.request(req).subscribe(event => {
                //     // Via this API, you get access to the raw event stream.
                //     // Look for upload progress events.
                //     if (event.type === HttpEventType.UploadProgress) {
                //         // This is an upload progress event. Compute and show the % done:
                //         const percentDone = Math.round((100 * event.loaded) / event.total);
                //         console.log(`File is ${percentDone}% uploaded.`);
                //     } else if (event instanceof HttpResponse) {
                //         console.log('File is completely uploaded!');
                //         this.logger.info('Finished downloading definitions archive, storing it in db');
                //         this.db.update('', '',

                //     }
                // });

                // return this.http
                //     .get(`https://www.bungie.net${dbPath}`, { responseType: 'blob' })
                //     .pipe(take(1))
                //     .subscribe(resp => {
                //         console.log(resp);
                //         // this.db.update('manifest', 'allData', resp);
                //     });

                return fetch(`https://www.bungie.net${dbPath}`).then(x => {
                    x.json()
                        .then(y => {
                            console.log(y);
                            const versionKey = `${VERSION}:${dbPath}`;

                            const prunedTables = this.pruneTables(y, [
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
                            ]);

                            this.db
                                .update('manifest', 'allData', [{ id: versionKey, data: prunedTables }])
                                .then(z => {
                                    console.log('success');
                                    console.log(z);
                                })
                                .catch(err => {
                                    console.log('error');
                                    console.log(err);
                                });
                        })
                        .catch(e => {
                            console.log('error');
                            console.error(e);
                        }); // this.db.update('manifest', 'allData', x.json());
                });

                // .then( resp =>{
                //     console.log(resp);
                // });

                // pipe(
                //     map(resp => {
                //         console.log('done');
                //         console.log(resp);
                //     }))
                // .toPromise()
                // .then(resp => {
                //     this.logger.info('Finished downloading definitions archive, storing it in db');
                //     this.db.removeAll('manifest', 'allData');
                //     this.db.update('manifest',  'allData', resp.data)
                //     // db.manifestBlob.put({ key: dbPath, data: resp.data });
                //     return resp.data;
                // });

                //   return axios(`https://www.bungie.net${dbPath}`, {
                //     responseType: "blob",
                //     onDownloadProgress
                //   }).then(resp => {
                //     log("Finished downloading definitions archive, storing it in db");
                //     db.manifestBlob.put({ key: dbPath, data: resp.data });
                //     return resp.data;
                //   });
            })
        );
    }
    // openDBFromBlob(SQLLib, blob) {
    //     const url = window.URL.createObjectURL(blob);
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', url, true);
    //         xhr.responseType = 'arraybuffer';
    //         xhr.onload = function(e) {
    //             const uInt8Array = new Uint8Array(this.response);
    //             resolve(new SQLLib.Database(uInt8Array));
    //         };
    //         xhr.send();
    //     });
    // }
    // unzipManifest(blob) {
    //     this.logger.info('Unzipping definitions archive');

    //     return new Promise((resolve, reject) => {
    //         zip.useWebWorkers = true;
    //         zip.workerScripts = { inflater: [zipWorker, inflate] };

    //         zip.createReader(
    //             new zip.BlobReader(blob),
    //             zipReader => {
    //                 // get all entries from the zip
    //                 zipReader.getEntries(entries => {
    //                     if (!entries.length) {
    //                         this.logger.info('Zip archive is empty. Something went wrong');
    //                         const err = new Error('Definitions archive is empty');
    //                         return reject(err);
    //                     }

    //                     this.logger.info('Found', entries.length, 'entries within definitions archive');
    //                     this.logger.info('Loading first file...', entries[0].filename);

    //                     entries[0].getData(new zip.BlobWriter(), blob => {
    //                         resolve(blob);
    //                     });
    //                 });
    //             },
    //             error => {
    //                 reject(error);
    //             }
    //         );
    //     });
    // }

    private pruneTables(obj, keys) {
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

    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;

            case HttpEventType.UploadProgress:
                // Compute and show the % done:
                const percentDone = Math.round((100 * event.loaded) / event.total);
                return `File "${file.name}" is ${percentDone}% uploaded.`;

            case HttpEventType.Response:
                return `File "${file.name}" was completely uploaded!`;

            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }

    public loadManifestData(language: string = 'en', progressCallback, completeCallback) {
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

                        return this.allDataFromRemote(path, null, progressCallback).pipe(
                            map(definitions => {
                                console.log('manifest done');
                                console.log(definitions);
                                //  this.logger.info('Successfully got requested definitions');

                                const key = [VERSION, path].join(':');
                                //this.db.allData.put({ key, data: definitions });

                                //cleanUpPreviousVersions(path, key);

                                //dataCb(null, { done: true, definitions });
                            })
                        );
                    })
                );
            })
        );
    }
}
