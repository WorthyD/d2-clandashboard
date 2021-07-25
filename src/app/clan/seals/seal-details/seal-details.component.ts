import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-seal-details',
  templateUrl: './seal-details.component.html',
  styleUrls: ['./seal-details.component.scss']
})
export class SealDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  sealKey = this.route.params.pipe(map((x) => x.sealHash, distinctUntilChanged()));
  ngOnInit(): void {}
}
