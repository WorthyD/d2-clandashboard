import { Component, OnInit } from '@angular/core';
import { PlayerActivityService } from '../player-activity.service';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.scss']
})
export class PlayerActivityComponent implements OnInit {
  constructor(private playerActivityService: PlayerActivityService) {}
  activityIsLoading = this.playerActivityService.playerActivitiesLoading;
  playerActivities = this.playerActivityService.playerActivities$;
  ngOnInit(): void {}
}
