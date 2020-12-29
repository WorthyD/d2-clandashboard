import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, take, filter } from 'rxjs/operators';
import { RaidsService } from '../raids.service';

@Component({
  selector: 'app-raid-details',
  templateUrl: './raid-details.component.html',
  styleUrls: ['./raid-details.component.scss']
})
export class RaidDetailsComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute, public raidsService: RaidsService) {
    this.raidKey.pipe(takeUntil(this.destroyed)).subscribe((r) => {
      this.raidsService.changeRaidDetails(r);
    });

    this.raidsService.raidDetailStats$.pipe(takeUntil(this.destroyed)).subscribe();
  }

  raidKey = this.activatedRoute.params.pipe(map((x) => x.raidKey, distinctUntilChanged()));

  private destroyed = new Subject();

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
