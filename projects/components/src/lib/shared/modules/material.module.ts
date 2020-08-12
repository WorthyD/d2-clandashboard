import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatCardModule } from '@angular/material/card';
const componentModules = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatSortModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules]
})
export class MaterialModule {}
