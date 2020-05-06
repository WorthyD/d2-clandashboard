import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSeasonProgressComponent } from './clan-season-progress.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
    declarations: [ClanSeasonProgressComponent],
    exports: [ClanSeasonProgressComponent],
    imports: [CommonModule, MatProgressBarModule, MatCardModule, MatChipsModule],
})
export class ClanSeasonProgressModule {}
