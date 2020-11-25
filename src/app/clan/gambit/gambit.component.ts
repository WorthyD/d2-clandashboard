import { Component, OnInit } from '@angular/core';
import { GambitService } from './gambit.service';

@Component({
  selector: 'app-gambit',
  templateUrl: './gambit.component.html',
  styleUrls: ['./gambit.component.scss'],
  providers: [GambitService]
})
export class GambitComponent implements OnInit {
  constructor(public gambitService: GambitService) {}

  ngOnInit(): void {
    this.gambitService.loadStats();
  }
}
