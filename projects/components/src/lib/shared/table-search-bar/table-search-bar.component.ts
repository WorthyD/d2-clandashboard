import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-table-search-bar',
  template: `
    <div class="table-search-bar">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .table-search-bar {
        display: flex;
        box-sizing: border-box;
        padding: .25rem 1rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
      }
    `
  ]
})
export class TableSearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
