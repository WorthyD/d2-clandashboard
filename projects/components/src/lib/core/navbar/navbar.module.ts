import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [CommonModule, MatToolbarModule]
})
export class NavbarModule {}
