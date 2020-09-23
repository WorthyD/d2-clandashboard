import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDirective } from './template.directive';
import { VarDirective } from './ng-var.directive';

@NgModule({
  declarations: [TemplateDirective, VarDirective],
  exports: [VarDirective],
  imports: [CommonModule]
})
export class DirectivesModule {}
