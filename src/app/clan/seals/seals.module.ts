import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealsComponent } from './seals.component';
import { SealsService } from './seals.service';
import { SealsRoutingModule } from './seals-routing.module';

@NgModule({
  declarations: [SealsComponent],
  imports: [CommonModule, SealsRoutingModule]
})
export class SealsModule {}
