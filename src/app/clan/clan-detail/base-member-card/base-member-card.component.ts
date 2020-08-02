import { Component, OnInit } from '@angular/core';
import { ClanDetailService } from '../clan-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClanMember } from 'bungie-models';

import { getClanMemberId } from '@destiny/data';
@Component({
  selector: 'app-base-member-card',
  template: ''
})
export class BaseMemberCardComponent implements OnInit {
  constructor(public clanDetails: ClanDetailService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  viewMember(memberId: ClanMember) {
    this.router.navigate(['../member-details', getClanMemberId(memberId)], {
      relativeTo: this.route
    });
  }
}
