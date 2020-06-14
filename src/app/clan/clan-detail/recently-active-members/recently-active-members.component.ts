import { Component, OnInit } from '@angular/core';
import { ClanDetailService } from '../clan-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseMemberCardComponent } from '../base-member-card/base-member-card.component';

@Component({
    selector: 'app-recently-active-members',
    templateUrl: './recently-active-members.component.html',
    styleUrls: ['./recently-active-members.component.scss'],
})
export class RecentlyActiveMembersComponent extends BaseMemberCardComponent  implements OnInit {
    constructor(
        public baseClanDetails: ClanDetailService,
        private baseRouter: Router,
        private baseRoute: ActivatedRoute
    ) {
        super(baseClanDetails, baseRouter, baseRoute);
    }

    ngOnInit(): void {}
}
