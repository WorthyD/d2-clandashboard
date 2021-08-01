import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClanSealTableDataItem } from './clan-seal-table-data-item';

@Component({
  selector: 'lib-clan-seal-table',
  templateUrl: './clan-seal-table.component.html',
  styleUrls: ['./clan-seal-table.component.scss']
})
export class ClanSealTableComponent implements OnInit, AfterViewInit {
  _clanSealTableData;
  @Input()
  get clanSealTableData(): ClanSealTableDataItem[] {
    return this._clanSealTableData;
  }
  set clanSealTableData(value) {
    this._clanSealTableData = value;
    if (value) {
      this.applyDataSource(value);
    }
  }

  displayedColumns: string[] = ['membershipTypeId', 'displayName', 'completedTriumphCount', 'completionPercentage'];
  dataSource: MatTableDataSource<ClanSealTableDataItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
  applyDataSource(value) {
    this.dataSource = new MatTableDataSource(value);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }
}
