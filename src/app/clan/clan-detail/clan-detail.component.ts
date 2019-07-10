import { Component, OnInit } from '@angular/core';

//import { GroupV2Service } from 'bungie-api';
import { GroupV2Service } from 'projects/bungie-api/src/lib';

import { Clan } from 'bungie-parse';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.scss']
})
export class ClanDetailComponent implements OnInit {
  clan$;
  constructor(private gs: GroupV2Service) {}

  ngOnInit() {
    this.clan$ = this.gs.groupV2GetGroup(2073131);
  }
}
