import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealDetailsComponent } from './seal-details.component';

@NgModule({
  declarations: [SealDetailsComponent],
  exports: [SealDetailsComponent],
  imports: [CommonModule]
})
export class SealDetailsModule {}
