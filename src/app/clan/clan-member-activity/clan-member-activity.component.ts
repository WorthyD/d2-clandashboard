import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMemberProfileId } from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { ClanMemberActivityService } from './clan-member-activity.service';

@Component({
  selector: 'app-clan-member-activity',
  templateUrl: './clan-member-activity.component.html',
  styleUrls: ['./clan-member-activity.component.scss'],
  providers: [ClanMemberActivityService]
})
export class ClanMemberActivityComponent implements OnInit {
  constructor(
    public clanMemberActivityService: ClanMemberActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clanMemberActivityService.loadMemberActivity();
  }
  viewMember(member: MemberProfile) {
    this.router.navigate(['../../../member-details', getMemberProfileId(member), 'activity'], {
      relativeTo: this.route
    });
  }
}
