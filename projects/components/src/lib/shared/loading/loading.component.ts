import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-loading',
  template: `
    <div class="loading-container m-3">
      <mat-spinner color="primary"></mat-spinner>
    </div>
  `,
  styles: [
    `
    :host{
      width:100%;
    }
      .loading-container {
        align-items: center;
        display: flex;
        justify-content: center;
        width:100%;
      }
    `
  ]
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
