import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { ClassTypeTextPipe } from './class-type/class-type-text.pipe';
import { RaceTypeTextPipe } from './race-type/race-type-text.pipe';
import { GenderTypeTextPipe } from './gender-type/gender-type-text.pipe';
import { RaidReportUrlPipe } from './raid-report-url/raid-report-url.pipe';

const pipes = [DateAgoPipe, ClassTypeTextPipe, RaceTypeTextPipe, GenderTypeTextPipe, RaidReportUrlPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  imports: [CommonModule]
})
export class PipesModule {}
