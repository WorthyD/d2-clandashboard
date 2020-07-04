import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
const componentModules = [MatButtonModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules]
})
export class MaterialModule {}