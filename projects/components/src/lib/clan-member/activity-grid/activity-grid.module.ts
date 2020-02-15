import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from './activity-grid.component';

@NgModule({
    declarations: [ActivityGridComponent],
    exports: [ActivityGridComponent],
    imports: [CommonModule]
})
export class ActivityGridModule {}
