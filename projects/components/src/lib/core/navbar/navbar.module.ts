import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../../shared/modules/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MaterialModule, MatTooltipModule]
})
export class NavbarModule {}
