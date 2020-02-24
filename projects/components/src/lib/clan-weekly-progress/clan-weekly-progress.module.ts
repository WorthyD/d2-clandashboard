import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [ClanWeeklyProgressComponent],
    exports: [ClanWeeklyProgressComponent],
    imports: [CommonModule, MatCardModule]
})
export class ClanWeeklyProgressModule {}
