import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedClansComponent } from './saved-clans.component';

@NgModule({
  declarations: [SavedClansComponent],
  exports: [SavedClansComponent],
  imports: [CommonModule]
})
export class SavedClansModule {}
