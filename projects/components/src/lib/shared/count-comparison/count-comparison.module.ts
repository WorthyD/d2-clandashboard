import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComparisonComponent } from './count-comparison.component';
import { MaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [CountComparisonComponent],
  exports: [CountComparisonComponent],
  imports: [CommonModule, MaterialModule]
})
export class CountComparisonModule {}
