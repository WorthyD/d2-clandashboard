import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { GroupV2Service } from 'bungie-api';

import { ClanDetails } from 'bungie-models';
import { Subscription } from 'rxjs';

import { ClanDatabase } from '../services/ClanDatabase';
import { FormControl } from '@angular/forms';
import { map, sampleTime, shareReplay, switchMap, take, withLatestFrom } from 'rxjs/operators';

interface LoadClanResult {
    id: number;
    clanDetails: ClanDetails;
}
@Component({
    selector: 'app-clan-search',
    templateUrl: './clan-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./clan-search.component.scss']
})
export class ClanSearchComponent implements OnInit {
    loadSubscription: Subscription;

    constructor(private groupService: GroupV2Service, private clanDB: ClanDatabase) {}

    autocompleteControl = new FormControl('');

    autocompleteResult$ = this.autocompleteControl.valueChanges.pipe(
        sampleTime(350),
        switchMap(currentQuery =>
            this.groupService.groupV2GroupSearch({
                name: currentQuery,
                groupType: 1,
                groupMemberCountFilter: null,
                tagText: null,
                localeFilter: null
            })
        ),
        //withLatestFrom(this.loadedClans),
        //map(([clanList, loadedRepos]) => {
        map(clanListResults => {
            const currentQuery = this.autocompleteControl.value;
            const clanList = clanListResults.Response.results;
            if (!currentQuery || clanList.find(repo => repo.name.toUpperCase() === currentQuery.toUpperCase())) {
                return clanList;
            }

            // Hide loaded repose

            // loadedRepos.forEach(loadedRepo => {
            //     const index = reposList.indexOf(loadedRepo);
            //     if (index !== -1) {
            //         reposList.splice(index, 1);
            //     }
            // });

            //return [currentQuery].concat(clanList.slice(0, 10));
            return clanList.slice(0, 10);
        }),
        shareReplay(1)
    );

    ngOnInit() {}

    load(clanId: number) {
        const clanResult: LoadClanResult = {
            id: 0,
            clanDetails: {}
        };

        this.groupService
            .groupV2GetGroup(clanId)
            .pipe(
                map(result => {
                    console.log(result);
                    clanResult.clanDetails = result.Response.detail;
                })
            )
            .subscribe(x => {
                console.log(x);
            });

        // this.loadSubscription = details.subscribe(x => {
        //     console.log(x);
        //     console.log(clanResult);
        //     this.persistData(clanResult);
        // });
        // this.groupService
        //     .groupV2GroupSearch({ name: 'dod' })
        //     .pipe(map(result => {}))
        //     .subscribe(x => {
        //         console.log(x);
        //     });
        // async function $http(config: HttpClientConfig) {
        //     // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
        //     return fetch(config.url, {headers:{'x-api-key': 'ebe6e29e62be48f98959ebd0a90974ef'} });
        // }

        // groupSearch($http, { name: 'dod' }).then(x => {
        //     console.log(x);
        // });
    }

    persistData(clanResult: LoadClanResult) {
        const dbId: string = clanResult.clanDetails.groupId.toString();
        clanResult.id = clanResult.clanDetails.groupId;
        this.clanDB.update(dbId, 'ClanDetails', [clanResult]);
        // look at home-page.ts
    }
}
