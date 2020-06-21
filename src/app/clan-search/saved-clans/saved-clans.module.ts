import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedClansComponent } from './saved-clans.component';
import { MaterialModule } from '@destiny/components';

@NgModule({
  declarations: [SavedClansComponent],
  exports: [SavedClansComponent],
  imports: [CommonModule, MaterialModule]
})
export class SavedClansModule {}
