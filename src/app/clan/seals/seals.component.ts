import { Component, OnInit } from '@angular/core';
import { SealsService } from './seals.service';

@Component({
  selector: 'app-seals',
  templateUrl: './seals.component.html',
  styleUrls: ['./seals.component.scss'],
  providers: [SealsService]
})
export class SealsComponent implements OnInit {
  constructor(public sealService: SealsService) {}

  ngOnInit(): void {}
}
