import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMemberProfileId } from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { CrucibleService } from './crucible.service';

@Component({
  selector: 'app-crucible',
  templateUrl: './crucible.component.html',
  styleUrls: ['./crucible.component.scss'],
  providers: [CrucibleService]
})
export class CrucibleComponent implements OnInit {
  constructor(public crucibleService: CrucibleService, private router: Router, private route: ActivatedRoute) {}

  // TODO: On Destroy
  ngOnInit(): void {
    this.crucibleService.loadStats();
  }

  viewMember(member: MemberProfile) {
    this.router.navigate(['../../../member-details', getMemberProfileId(member)], {
      relativeTo: this.route
    });
  }
}
