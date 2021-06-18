import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';
// import { PlayerService } from '../player.service';
import { PlayerService } from '../../shared/components/player/player.service';

import { MatDialog } from '@angular/material/dialog';
import { PlayerSearchComponent } from 'src/app/player-search/player-search.component';
@Component({
  selector: 'app-player-details-container',
  templateUrl: './player-details-container.component.html',
  styleUrls: ['./player-details-container.component.scss']
})
export class PlayerDetailsContainerComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private playerService: PlayerService
  ) {
    this.activatedRoute.params
      .pipe(
        map((x) => {
          //this.playerService.memberId.next(x.memberI);
          return x.memberId;
        }, distinctUntilChanged())
      )
      .subscribe((x) => {
        //this.memberId = x;
        //this.playerService.memberIdSource.next(x.memberId);
        this.playerService.setMemberId(x);
      });
  }
  memberId = this.playerService.memberId$;

  // memberId = this.activatedRoute.params.pipe(
  //   map((x) => {
  //     //this.playerService.memberId.next(x.memberI);
  //     return x.memberId;
  //   }, distinctUntilChanged())
  // );

  ngOnInit(): void {}
  goHome() {
    this.router.navigate(['/']);
  }
  openPlayerSearch() {
    this.dialog.open(PlayerSearchComponent);
  }
}
