import { Component, OnInit } from '@angular/core';

import { GroupV2Service } from 'bungie-api';

import { ClanDetails } from 'bungie-models';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { ClanDatabase } from '../services/ClanDatabase';
interface LoadClanResult {
    id: number;
    clanDetails: ClanDetails;
}

@Component({
    selector: 'app-clan-search',
    templateUrl: './clan-search.component.html',
    styleUrls: ['./clan-search.component.scss']
})
export class ClanSearchComponent implements OnInit {
    loadSubscription: Subscription;

    constructor(
        private groupService: GroupV2Service,
        private clanDB: ClanDatabase
    ) {}

    ngOnInit() {}

    load(clanId: number) {
        const clanResult: LoadClanResult = {
            id: 0,
            clanDetails: {}
        };

        const details = this.groupService.groupV2GetGroup(clanId).pipe(
            map(result => {
                clanResult.clanDetails = result.Response.detail;
            })
        );

        this.loadSubscription = details.subscribe(x => {
            console.log(x);
            console.log(clanResult);
            this.persistData(clanResult);
        });
    }

    persistData(clanResult: LoadClanResult) {
        const dbId: string = clanResult.clanDetails.groupId.toString();
        clanResult.id = clanResult.clanDetails.groupId;
        this.clanDB.update(dbId, 'ClanDetails', [clanResult]);
        // look at home-page.ts
    }
}
