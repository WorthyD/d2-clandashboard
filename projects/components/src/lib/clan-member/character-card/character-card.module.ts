import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';

import { MatCardModule } from '@angular/material/card';
@NgModule({
    declarations: [CharacterCardComponent],
    exports: [CharacterCardComponent],
    imports: [CommonModule, MatCardModule],
})
export class CharacterCardModule {}
