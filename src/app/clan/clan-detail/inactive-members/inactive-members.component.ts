import { Component, OnInit } from '@angular/core';
import { ClanDetailService } from '../clan-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseMemberCardComponent } from '../base-member-card/base-member-card.component';

@Component({
  selector: 'app-inactive-members',
  templateUrl: './inactive-members.component.html',
  styleUrls: ['./inactive-members.component.scss']
})
export class InactiveMembersComponent extends BaseMemberCardComponent  implements OnInit {

    constructor(
        public baseClanDetails: ClanDetailService,
        private baseRouter: Router,
        private baseRoute: ActivatedRoute
    ) {
        super(baseClanDetails, baseRouter, baseRoute);
    }

  ngOnInit(): void {
  }

}
