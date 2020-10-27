import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberTypeComponent } from './member-type.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [MemberTypeComponent],
  exports: [MemberTypeComponent],
  imports: [CommonModule, PipesModule, MaterialModule]
})
export class IconsModule {}
