import { Component, OnInit } from '@angular/core';
import { RaidsService } from '../raids.service';

@Component({
  selector: 'app-raid-details-all',
  templateUrl: './raid-details-all.component.html',
  styleUrls: ['./raid-details-all.component.scss']
})
export class RaidDetailsAllComponent implements OnInit {
  constructor(public raidService: RaidsService) {}
  ngOnInit(): void {
    console.log('stuff');
    this.raidService.loadRaidStats();
  }
}
