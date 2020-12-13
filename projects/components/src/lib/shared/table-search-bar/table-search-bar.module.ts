import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchBarComponent } from './table-search-bar.component';
import { MaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [TableSearchBarComponent],
  exports: [TableSearchBarComponent],
  imports: [CommonModule, MaterialModule]
})
export class TableSearchBarModule {}
