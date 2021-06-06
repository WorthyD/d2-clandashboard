import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSearchComponent } from './player-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerSearchService } from './player-search.service';

@NgModule({
  declarations: [PlayerSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  providers: [PlayerSearchService]
})
export class PlayerSearchModule {}
