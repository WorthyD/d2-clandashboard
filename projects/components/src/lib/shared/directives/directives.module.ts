import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDirective } from './template.directive';
import { VarDirective } from './ng-var.directive';
import { CountToDirective } from './count-to.directive';

const directives = [TemplateDirective, VarDirective, CountToDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule]
})
export class DirectivesModule {}
