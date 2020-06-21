import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedClanCardComponent } from './featured-clan-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
  declarations: [FeaturedClanCardComponent],
  exports: [FeaturedClanCardComponent],
  imports: [CommonModule, MatCardModule, MatListModule, MaterialModule]
})
export class FeaturedClanCardModule {}
