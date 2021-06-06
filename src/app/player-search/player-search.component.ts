import { Component, OnInit } from '@angular/core';
import { PlayerSearchService } from './player-search.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent implements OnInit {
  constructor(private playerSearchService: PlayerSearchService) {}

  ngOnInit(): void {}
}
