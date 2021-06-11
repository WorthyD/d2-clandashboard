import { Component, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, sampleTime, switchMap, tap } from 'rxjs/operators';
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
    @Optional() public dialogRef: MatDialogRef<PlayerSearchComponent>
  ) {}

  autocompleteControl = new FormControl('');

  loading$ = this.playerSearchService.loading;
  members$ = this.autocompleteControl.valueChanges.pipe(
    debounceTime(500),
    tap(() => this.playerSearchService.loadingSource.next(true)),
    switchMap((query) => {
      return this.playerSearchService.textPlayerSearch(query);
    }),
    tap(() => this.playerSearchService.loadingSource.next(false))
  );

  ngOnInit(): void {}
  memberClick(member) {
    this.router.navigate(['player', `${member.membershipType}-${member.membershipId}`]);
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
