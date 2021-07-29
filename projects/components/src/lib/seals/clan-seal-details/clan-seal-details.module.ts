import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSealDetailsComponent } from './clan-seal-details.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [ClanSealDetailsComponent],
  exports: [ClanSealDetailsComponent],
  imports: [CommonModule, MatCardModule]
})
export class ClanSealDetailsModule {}
