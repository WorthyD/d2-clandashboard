import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSealDetailsComponent } from './clan-seal-details.component';

@NgModule({
  declarations: [ClanSealDetailsComponent],
  exports: [ClanSealDetailsComponent],
  imports: [CommonModule]
})
export class ClanSealDetailsModule {}
