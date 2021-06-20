import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOverviewComponent } from './member-overview.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../../pipes/pipes.module';
import {IconsModule} from '../../icons/icons.module';
@NgModule({
  declarations: [MemberOverviewComponent],
  exports: [MemberOverviewComponent],
  imports: [CommonModule, MatCardModule, PipesModule, IconsModule]
})
export class MemberOverviewModule {}
