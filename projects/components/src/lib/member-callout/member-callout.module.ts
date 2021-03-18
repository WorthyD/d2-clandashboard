import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCalloutComponent } from './member-callout.component';

@NgModule({
  declarations: [MemberCalloutComponent],
  exports: [MemberCalloutComponent],
  imports: [CommonModule]
})
export class MemberCalloutModule {}
