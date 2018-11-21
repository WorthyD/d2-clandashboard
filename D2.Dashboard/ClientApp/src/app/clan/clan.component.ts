import { Component, OnInit } from '@angular/core';
import { ClanService } from './clan.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  constructor(private clanService: ClanService) { }

  ngOnInit() {

  }

}
