import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesPipe } from './activities.pipe';



@NgModule({
  declarations: [ActivitiesPipe],
  imports: [
    CommonModule
  ]
})
export class ActivitiesModule { }
