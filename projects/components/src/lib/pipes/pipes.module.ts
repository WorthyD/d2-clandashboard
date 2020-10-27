import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { ClassTypeTextPipe } from './class-type/class-type-text.pipe';
import { RaceTypeTextPipe } from './race-type/race-type-text.pipe';
import { GenderTypeTextPipe } from './gender-type/gender-type-text.pipe';
import { RaidReportUrlPipe } from './raid-report-url/raid-report-url.pipe';
import { DestinyTrackerUrlPipe } from './destiny-tracker-url/destiny-tracker-url.pipe';
import { BungieProfileUrlPipe } from './bungie-profile-url/bungie-profile-url.pipe';
import { RaidReportProfileUrlPipe } from './raid-report-url/raid-report-profile-url.pipe';
import { PlaytimePipe } from './playtime/playtime.pipe';
import { DungeonReportUrlPipe } from './dungeon-report-url/dungeon-report-url.pipe';
import { DungeonReportProfileUrlPipe } from './dungeon-report-url/dungeon-report-profile-url.pipe';
import { MemberTypePipe } from './member-type/member-type.pipe';

const pipes = [
  DateAgoPipe,
  ClassTypeTextPipe,
  RaceTypeTextPipe,
  GenderTypeTextPipe,
  RaidReportUrlPipe,
  DestinyTrackerUrlPipe,
  BungieProfileUrlPipe,
  RaidReportProfileUrlPipe,
  PlaytimePipe,
  DungeonReportUrlPipe,
  DungeonReportProfileUrlPipe,
  MemberTypePipe
];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  imports: [CommonModule]
})
export class PipesModule {}
