import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-count-comparison',
  templateUrl: './count-comparison.component.html',
  styleUrls: ['./count-comparison.component.scss']
})
export class CountComparisonComponent implements OnInit {
  @Input()
  title;

  @Input()
  current;

  constructor() { }

  ngOnInit(): void {
  }

}
