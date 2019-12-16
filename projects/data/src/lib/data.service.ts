import { Injectable } from '@angular/core';

import { catchError, map, switchMap, tap, distinctUntilChanged, first, take, filter, withLatestFrom } from 'rxjs/operators';

import { Destiny2Service } from 'bungie-api';
import { ManifestDatabaseService } from './services/manifest-database.service';

const DOWNLOADING = 'downloading manifest';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private d2service: Destiny2Service, private db: ManifestDatabaseService) {}
    requireDatabasePromise;
    private getManifest(language: string) {
        return this.d2service.destiny2GetDestinyManifest().pipe(
            map(response => {
                console.log('done');
                console.log(response);
                return response.Response.mobileWorldContentPaths[language];
            })
        );
    }

    private allDataFromRemote(dbPath, tablesNames, progressCb) {
        if (!requireDatabasePromise) {
            requireDatabasePromise = requireDatabase();
          }
        
    }

    public loadManifestData(language: string = 'en', progressCallback, completeCallback) {
        console.log('getting more manifest');
        return this.db.getValues('manifest').allData.pipe(
            switchMap(x => {
                console.log('getting stuff');
                // Logic

                return this.getManifest(language).pipe(
                    map(path => {
                        if (progressCallback) {
                            progressCallback({ status: DOWNLOADING });
                        }

                        console.log(path);
                    })
                );

                /*
                return this.d2service.destiny2GetDestinyManifest().pipe(
                    map(response => {
                        progressCallback && progressCallback({ status: DOWNLOADING });

                        console.log('done');
                        console.log(response);
                        return response;
                    })
                );
                */
            })
        );
    }
}
