import { Component, OnInit } from '@angular/core';
import { RaidsService } from '../raids.service';

@Component({
  selector: 'app-raid-details-all',
  templateUrl: './raid-details-all.component.html',
  styleUrls: ['./raid-details-all.component.scss']
})
export class RaidDetailsAllComponent implements OnInit {
  showGG = false;
  showVaultedContent = false;
  constructor(public raidService: RaidsService) {}
  ngOnInit(): void {
    this.raidService.loadRaidStats();
  }
  changeGG(event) {
    this.showGG = event.checked;
  }
  changeVaulted(event) {
    this.showVaultedContent = event.checked;
  }
}
