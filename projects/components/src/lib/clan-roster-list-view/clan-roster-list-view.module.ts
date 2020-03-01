import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ClassCellComponent } from './class-cell.component';
@NgModule({
    declarations: [ClanRosterListViewComponent, ClassCellComponent],
    exports: [ClanRosterListViewComponent],
    imports: [CommonModule, MatTableModule, MatSortModule]
})
export class ClanRosterListViewModule {}
