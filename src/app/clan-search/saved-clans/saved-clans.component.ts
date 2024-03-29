import { Component, OnInit } from '@angular/core';
import { ClanSearchState } from '../state/clan-search.state';
import { Store, select } from '@ngrx/store';
import { selectAll } from '../state/loaded-clans/loaded-clans.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-clans',
  templateUrl: './saved-clans.component.html',
  styleUrls: ['./saved-clans.component.scss']
})
export class SavedClansComponent implements OnInit {
  savedClans$ = this.store.pipe(select(selectAll));

  constructor(private store: Store<ClanSearchState>, private router: Router) {}
  viewClan(clan) {
    this.router.navigate(['clan', clan.id]);
  }
  ngOnInit(): void {}
}
