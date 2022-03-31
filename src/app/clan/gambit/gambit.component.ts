import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMemberProfileId } from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { GambitService } from './gambit.service';

@Component({
  selector: 'app-gambit',
  templateUrl: './gambit.component.html',
  styleUrls: ['./gambit.component.scss'],
  providers: [GambitService]
})
export class GambitComponent implements OnInit {
  constructor(public gambitService: GambitService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gambitService.loadStats();
  }
  viewMember(member: MemberProfile) {
    this.router.navigate(['../../../member-details', getMemberProfileId(member)], {
      relativeTo: this.route
    });
  }
}
