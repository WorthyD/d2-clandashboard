import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOverviewComponent } from './member-overview.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [MemberOverviewComponent],
  exports: [MemberOverviewComponent],
  imports: [CommonModule, MatCardModule, PipesModule]
})
export class MemberOverviewModule {}
