import { Component, Input, OnInit } from '@angular/core';
import { PresentationNodeDefinition } from 'bungie-models';

@Component({
  selector: 'lib-clan-seal-details',
  templateUrl: './clan-seal-details.component.html',
  styleUrls: ['./clan-seal-details.component.scss']
})
export class ClanSealDetailsComponent implements OnInit {


  @Input()
  seal: PresentationNodeDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
