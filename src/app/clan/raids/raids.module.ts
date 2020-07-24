import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './raids.component';
import { RaidRoutingModule } from './raids-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RaidsComponent],
  imports: [CommonModule, RaidRoutingModule, MatTableModule]
})
export class RaidsModule {}
