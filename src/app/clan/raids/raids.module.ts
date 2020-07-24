import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidsComponent } from './raids.component';
import { RaidRoutingModule } from './raids-routing.module';

@NgModule({
  declarations: [RaidsComponent],
  imports: [CommonModule, RaidRoutingModule]
})
export class RaidsModule {}
