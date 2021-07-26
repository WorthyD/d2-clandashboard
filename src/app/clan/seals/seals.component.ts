import { Component, OnInit } from '@angular/core';
import { SealsService } from './seals.service';

import { PresentationNodeDefinition } from 'bungie-models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seals',
  templateUrl: './seals.component.html',
  styleUrls: ['./seals.component.scss'],
})
export class SealsComponent implements OnInit {
  constructor(public sealService: SealsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sealService.loadSeals();
  }

  viewSeal(seal: PresentationNodeDefinition) {
    console.log('view seal', seal);

    this.router.navigate([seal.hash], {
      relativeTo: this.route
    });
  }
}
