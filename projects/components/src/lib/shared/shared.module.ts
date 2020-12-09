import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './directives/directives.module';
import { LoadingModule } from './loading/loading.module';
import { InputsModule } from './inputs/inputs.module';

const modules = [DirectivesModule, LoadingModule, InputsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class SharedModule {}
