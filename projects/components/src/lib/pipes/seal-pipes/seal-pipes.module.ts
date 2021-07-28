import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SealCompletionPipe } from './seal-completion.pipe';
import { SealCompletedPipe } from './seal-completed.pipe';
import { SealGuildedPipe } from './seal-guilded.pipe';



@NgModule({
  declarations: [
    SealCompletionPipe,
    SealCompletedPipe,
    SealGuildedPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SealPipesModule { }
