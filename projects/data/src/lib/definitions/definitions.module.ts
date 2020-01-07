import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDefinitionsPipe } from './base-definitions.pipe';



@NgModule({
  declarations: [BaseDefinitionsPipe],
  imports: [
    CommonModule
  ]
})
export class DefinitionsModule { }
