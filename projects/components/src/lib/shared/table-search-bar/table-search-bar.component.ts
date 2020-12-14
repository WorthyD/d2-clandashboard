import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-table-search-bar',
  template: `
    <div class="table-search-bar">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .table-search-bar {
        display: flex;
        box-sizing: border-box;
        padding: 0.25rem 1rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
      }
      .table-search-bar > * {
        margin: 0 1rem 0 0 ;
      }
    `
  ]
})
export class TableSearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
