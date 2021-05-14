import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

import { MemberProfile } from 'bungie-models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  @Input()
  memberId: Observable<string>;

  profile$: Observable<MemberProfile>;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.profile$ = this.memberId.pipe(
      switchMap((x) => {
        // tslint:disable-next-line:radix
        const memberType = x.split('-')[0];
        const memberId = x.split('-')[1];

        return this.playerService.getPlayerProfile(memberType, memberId);
      })
    );
  }
}
//http://localhost:4321/player/3-4611686018467238913
