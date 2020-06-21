import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const componentModules = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules]
})
export class MaterialModule {}
