import { Component, OnInit } from '@angular/core';
import { CrucibleService } from './crucible.service';

@Component({
  selector: 'app-crucible',
  templateUrl: './crucible.component.html',
  styleUrls: ['./crucible.component.scss'],
  providers: [CrucibleService]
})
export class CrucibleComponent implements OnInit {
  constructor(public crucibleService: CrucibleService) {}

  ngOnInit(): void {
    this.crucibleService.loadStats();
  }
}
