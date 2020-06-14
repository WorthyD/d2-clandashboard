import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonPassComponent } from './season-pass.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [SeasonPassComponent],
    exports: [SeasonPassComponent],
    imports: [CommonModule, MatProgressBarModule, MatCardModule, MatChipsModule],
})
export class SeasonPassModule {}
