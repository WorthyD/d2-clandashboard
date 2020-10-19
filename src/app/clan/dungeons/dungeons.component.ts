import { Component, OnInit } from '@angular/core';
import { DungeonsService } from './dungeons.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.scss'],
  providers: [DungeonsService]
})
export class DungeonsComponent implements OnInit {
  constructor(public dungeonService: DungeonsService) {}

  ngOnInit(): void {
    this.dungeonService.loadDungeonStats();
  }
}
