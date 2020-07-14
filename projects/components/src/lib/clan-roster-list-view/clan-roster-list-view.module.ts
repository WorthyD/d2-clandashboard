import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ClassCellComponent, ClassIconPipe } from './class-cell.component';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [ClanRosterListViewComponent, ClassCellComponent, ClassIconPipe ],
    exports: [ClanRosterListViewComponent, ClassIconPipe],
    imports: [CommonModule, MatTableModule, MatSortModule, MatIconModule]
})
export class ClanRosterListViewModule {}
