import { Component, OnInit } from '@angular/core';

import { GroupV2Service } from 'bungie-api';

import { ClanDetails } from 'bungie-models';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
interface LoadClanResult {
    clanDetails: ClanDetails;
}

@Component({
    selector: 'app-clan-search',
    templateUrl: './clan-search.component.html',
    styleUrls: ['./clan-search.component.scss']
})
export class ClanSearchComponent implements OnInit {
    loadSubscription: Subscription;

    constructor(private groupService: GroupV2Service) {}

    ngOnInit() {}

    load(clanId: number) {
        const clanResult: LoadClanResult = {
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
        });
    }

    persistData(clanResult:LoadClanResult){
        // look at home-page.ts
    }
}
