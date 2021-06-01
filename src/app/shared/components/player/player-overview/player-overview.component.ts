import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerActivityService } from '../player-activity.service';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  constructor(private playerService: PlayerService, private playerActivityService: PlayerActivityService) {}

  memberId = this.playerService.memberId;
  memberProfile$ = this.playerService.memberProfile;
  seasonPass$ = this.playerService.seasonPass$;
  characters$ = this.playerService.characters$;
  memberSnapShot$ = this.playerService.memberSnapShot$;

  //memberId;
  activityIsLoading = this.playerActivityService.playerActivitiesLoading;
  playerActivities = this.playerActivityService.playerActivities$;


  ngOnInit(): void {
    // this.memberId = this.playerService.memberId.subscribe((x) => {
    //   console.log(x);
    //   return x;
    // });
  }
}
