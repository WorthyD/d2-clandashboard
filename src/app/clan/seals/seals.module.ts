import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealsComponent } from './seals.component';
import { SealsService } from './seals.service';
import { SealsRoutingModule } from './seals-routing.module';
import { SealComponent } from './seal/seal.component';
import { SharedModule, ClanSealModule } from '@destiny/components';

@NgModule({
  declarations: [SealsComponent, SealComponent],
  imports: [CommonModule, SealsRoutingModule, ClanSealModule, SharedModule]
})
export class SealsModule {}
