import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSealComponent } from './clan-seal.component';
import { MaterialModule } from '../shared/modules/material.module';
import { CompletionPipe, CompletedPipe } from './completion.pipe';

@NgModule({
  declarations: [ClanSealComponent, CompletionPipe, CompletedPipe],
  exports: [ClanSealComponent],
  imports: [CommonModule, MaterialModule]
})
export class ClanSealModule {}
