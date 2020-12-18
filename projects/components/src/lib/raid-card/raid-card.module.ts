import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidCardComponent } from './raid-card.component';

@NgModule({
  declarations: [RaidCardComponent],
  exports: [RaidCardComponent],
  imports: [CommonModule]
})
export class RaidCardModule {}
