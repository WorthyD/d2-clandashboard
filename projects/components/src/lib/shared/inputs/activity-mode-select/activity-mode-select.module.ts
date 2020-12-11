import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityModeSelectComponent } from './activity-mode-select.component';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  declarations: [ActivityModeSelectComponent],
  exports: [ActivityModeSelectComponent],
  imports: [CommonModule, MaterialModule]
})
export class ActivityModeSelectModule {}
