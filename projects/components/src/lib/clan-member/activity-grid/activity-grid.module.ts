import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from './activity-grid.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [ActivityGridComponent],
    exports: [ActivityGridComponent],
    imports: [CommonModule, MatTableModule]
})
export class ActivityGridModule {}
