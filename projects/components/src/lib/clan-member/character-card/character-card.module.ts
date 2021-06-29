import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';

import { PipesModule } from '../../pipes/pipes.module';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [CharacterCardComponent],
  exports: [CharacterCardComponent],
  imports: [CommonModule, MatCardModule, PipesModule]
})
export class CharacterCardModule {}
