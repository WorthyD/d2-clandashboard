import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-loading-bar',
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
]
})
export class LoadingBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
