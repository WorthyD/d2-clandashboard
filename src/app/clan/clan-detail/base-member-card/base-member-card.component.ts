import { Component, OnInit } from '@angular/core';
import { ClanDetailService } from '../clan-detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-member-card',
  template: '',
})
export class BaseMemberCardComponent implements OnInit {

    constructor(
        public clanDetails: ClanDetailService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {}
    viewMember(memberId: number) {
        this.router.navigate(['../../member-details', memberId], {
            relativeTo: this.route,
        });
    }

}
