import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { MaterialModule } from '../modules/material.module';
import { LoadingBarComponent } from './loading-bar.component';

@NgModule({
  declarations: [LoadingComponent, LoadingBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingComponent, LoadingBarComponent]
})
export class LoadingModule {}
