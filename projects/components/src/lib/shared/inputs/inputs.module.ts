import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityModeSelectModule } from './activity-mode-select/activity-mode-select.module';
import { MemberSearchModule } from './member-search/member-search.module';

@NgModule({
  declarations: [],
  exports: [ActivityModeSelectModule, MemberSearchModule],
  imports: [CommonModule]
})
export class InputsModule {}
