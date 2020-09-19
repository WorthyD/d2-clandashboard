import { Component, OnInit } from '@angular/core';
import { ClanMemberActivityService } from './clan-member-activity.service';

@Component({
  selector: 'app-clan-member-activity',
  templateUrl: './clan-member-activity.component.html',
  styleUrls: ['./clan-member-activity.component.scss'],
  providers: [ClanMemberActivityService]
})
export class ClanMemberActivityComponent implements OnInit {
  constructor(public clanMemberActivityService: ClanMemberActivityService) {}

  ngOnInit(): void {
    this.clanMemberActivityService.loadMemberActivity();
  }
}
