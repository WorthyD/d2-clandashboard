import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@destiny/components';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { SealsService } from '../seals.service';
import { SealDetailsService } from './seal-details.service';

@Component({
  selector: 'app-seal-details',
  templateUrl: './seal-details.component.html',
  styleUrls: ['./seal-details.component.scss']
})
export class SealDetailsComponent extends BaseComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private sealService: SealDetailsService) {
    super();
  }

  sealKey = this.route.params.pipe(map((x) => x.sealHash, distinctUntilChanged()));
  clanSealDetails$ = this.sealService.clanSealDetails$;

  ngOnInit(): void {
    this.subs.push(this.sealKey.subscribe((x) => {
      this.sealService.changeSelectedSeal(x);
    }));
  }
}
