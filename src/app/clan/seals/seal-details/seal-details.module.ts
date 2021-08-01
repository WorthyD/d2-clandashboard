import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealDetailsComponent } from './seal-details.component';
import { ClanSealDetailsModule } from '@destiny/components/lib/seals/clan-seal-details';
import { SealDetailsService } from './seal-details.service';
import { SharedModule } from '@destiny/components';
import { ClanSealTableModule } from '@destiny/components/lib/seals/clan-seal-table';

@NgModule({
  declarations: [SealDetailsComponent],
  exports: [SealDetailsComponent],
  imports: [CommonModule, ClanSealDetailsModule, SharedModule, ClanSealTableModule],
  providers: [SealDetailsService]
})
export class SealDetailsModule {}
