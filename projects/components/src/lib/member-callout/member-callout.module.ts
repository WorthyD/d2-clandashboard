import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCalloutComponent } from './member-callout.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [MemberCalloutComponent],
  exports: [MemberCalloutComponent],
  imports: [CommonModule, MaterialModule]
})
export class MemberCalloutModule {}
