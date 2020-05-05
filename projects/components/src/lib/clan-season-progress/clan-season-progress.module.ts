import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSeasonProgressComponent } from './clan-season-progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
    declarations: [ClanSeasonProgressComponent],
    exports: [ClanSeasonProgressComponent],
    imports: [CommonModule, MatProgressBarModule],
})
export class ClanSeasonProgressModule {}
