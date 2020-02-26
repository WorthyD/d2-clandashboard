import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';



@NgModule({
  declarations: [DateAgoPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
