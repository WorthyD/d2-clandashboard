import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealsComponent } from './seals.component';
import { SealsService } from './seals.service';
import { SealsRoutingModule } from './seals-routing.module';
import { SharedModule, ClanSealModule } from '@destiny/components';
import { SealDetailsModule } from './seal-details/seal-details.module';

@NgModule({
  declarations: [SealsComponent],
  imports: [CommonModule, SealsRoutingModule, ClanSealModule, SharedModule, SealDetailsModule]
})
export class SealsModule {}
