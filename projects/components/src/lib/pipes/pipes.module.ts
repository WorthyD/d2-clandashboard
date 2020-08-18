import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { ClassTypeTextPipe } from './class-type/class-type-text.pipe';
import { RaceTypeTextPipe } from './race-type/race-type-text.pipe';
import { GenderTypeTextPipe } from './gender-type/gender-type-text.pipe';
import { RaidReportUrlPipe } from './raid-report-url/raid-report-url.pipe';

@NgModule({
    declarations: [DateAgoPipe, ClassTypeTextPipe, RaceTypeTextPipe, GenderTypeTextPipe, RaidReportUrlPipe],
    exports: [DateAgoPipe, ClassTypeTextPipe, RaceTypeTextPipe, GenderTypeTextPipe],
    imports: [CommonModule],
})
export class PipesModule {}
