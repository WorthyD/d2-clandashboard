import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealDetailsComponent } from './seal-details.component';
import { ClanSealDetailsModule } from '@destiny/components/lib/seals/clan-seal-details';
import { SealDetailsService } from './seal-details.service';

@NgModule({
  declarations: [SealDetailsComponent],
  exports: [SealDetailsComponent],
  imports: [CommonModule, ClanSealDetailsModule],
  providers: [SealDetailsService]
})
export class SealDetailsModule {}
