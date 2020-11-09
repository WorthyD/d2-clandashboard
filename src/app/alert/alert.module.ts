import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '@destiny/components';

@NgModule({
  declarations: [AlertComponent],
  imports: [MatDialogModule, MaterialModule, CommonModule]
})
export class AlertModule {}
