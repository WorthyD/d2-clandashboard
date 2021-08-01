import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSealTableComponent } from './clan-seal-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IconsModule } from '../../icons/icons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const components = [ClanSealTableComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    IconsModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class ClanSealTableModule {}
