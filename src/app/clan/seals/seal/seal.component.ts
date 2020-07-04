import { Component, OnInit, Input } from '@angular/core';
import { SealsService } from '../seals.service';
import { PresentationNodeDefinition } from 'bungie-models';

@Component({
  selector: 'app-seal',
  templateUrl: './seal.component.html',
  styleUrls: ['./seal.component.scss']
})
export class SealComponent implements OnInit {

  @Input()
  presentationNode: PresentationNodeDefinition;

  constructor(public sealService: SealsService) {}

  ngOnInit(): void {
  }

}
