import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { sampleTime, switchMap, tap } from 'rxjs/operators';
import { PlayerSearchService } from './player-search.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent implements OnInit {
  constructor(
    private playerSearchService: PlayerSearchService,
    private router: Router,
    public dialogRef: MatDialogRef<PlayerSearchComponent>
  ) {}

  autocompleteControl = new FormControl('');

  loading$ = this.playerSearchService.loading;
  members$ = this.autocompleteControl.valueChanges.pipe(
    tap(() => this.playerSearchService.loadingSource.next(true)),
    sampleTime(1000),
    switchMap((query) => {
      return this.playerSearchService.textPlayerSearch(query);
    }),
    tap(() => this.playerSearchService.loadingSource.next(false))
  );

  ngOnInit(): void {}
  memberClick(member) {
    this.router.navigate(['player', `${member.membershipType}-${member.membershipId}`]);
    this.dialogRef.close();
  }
}
