import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ClassCellComponent, ClassIconPipe } from './class-cell.component';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../shared/modules/material.module';
import { IconsModule } from '../icons/icons.module';
@NgModule({
  declarations: [ClanRosterListViewComponent, ClassCellComponent, ClassIconPipe],
  exports: [ClanRosterListViewComponent, ClassIconPipe],
  imports: [CommonModule, MatTableModule, MatSortModule, MatIconModule, MaterialModule, IconsModule]
})
export class ClanRosterListViewModule {}
