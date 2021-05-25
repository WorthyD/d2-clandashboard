import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  memberId = this.playerService.memberId;
  memberProfile$ = this.playerService.memberProfile;
  seasonPass$ = this.playerService.seasonPass$;
  characters$ = this.playerService.characters$;

  //memberId;

  ngOnInit(): void {
    // this.memberId = this.playerService.memberId.subscribe((x) => {
    //   console.log(x);
    //   return x;
    // });
  }
}
