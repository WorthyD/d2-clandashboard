import { Component, OnInit } from '@angular/core';
import { ClanDetailService } from '../clan-detail.service';
import { BaseMemberCardComponent } from '../base-member-card/base-member-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-highestpower-members',
    templateUrl: './highestpower-members.component.html',
    styleUrls: ['./highestpower-members.component.scss'],
})
export class HighestpowerMembersComponent extends BaseMemberCardComponent implements OnInit {
    constructor(
        public baseClanDetails: ClanDetailService,
        private baseRouter: Router,
        private baseRoute: ActivatedRoute
    ) {
        super(baseClanDetails, baseRouter, baseRoute);
    }
    ngOnInit(): void {}
}
