import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-player-details-container',
  templateUrl: './player-details-container.component.html',
  styleUrls: ['./player-details-container.component.scss']
})
export class PlayerDetailsContainerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  memberId = this.activatedRoute.params.pipe(map((x) => x.memberId, distinctUntilChanged()));

  ngOnInit(): void {}
}
