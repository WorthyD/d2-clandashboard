import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '@destiny/components'


@NgModule({
  declarations: [AboutComponent],
  imports: [
    MatDialogModule,
    MaterialModule,
    CommonModule
  ]
})
export class AboutModule { }
