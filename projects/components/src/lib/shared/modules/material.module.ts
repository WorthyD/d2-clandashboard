import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const componentModules = [MatButtonModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules]
})
export class MaterialModule {}
