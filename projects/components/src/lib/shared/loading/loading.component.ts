import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-loading',
  template: `
    <div class="loading-container m-3">
      <mat-spinner color="primary" [diameter]="diameter"></mat-spinner>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
      .loading-container {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {
  @Input()
  diameter = 100;

  constructor() {}

  ngOnInit(): void {}
}
