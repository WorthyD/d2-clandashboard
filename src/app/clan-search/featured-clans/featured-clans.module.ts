import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedClansComponent } from './featured-clans.component';
import { FeaturedClanCardModule } from '@destiny/components';

@NgModule({
  declarations: [FeaturedClansComponent],
  exports: [FeaturedClansComponent],
  imports: [CommonModule, FeaturedClanCardModule],
})
export class FeaturedClansModule {}
