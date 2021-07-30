import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSealDetailsComponent } from './clan-seal-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [ClanSealDetailsComponent],
  exports: [ClanSealDetailsComponent],
  imports: [CommonModule, MatCardModule, MatProgressBarModule]
})
export class ClanSealDetailsModule {}
