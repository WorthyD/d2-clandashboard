import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from './activity-grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
    declarations: [ActivityGridComponent],
    exports: [ActivityGridComponent],
    imports: [CommonModule, MatTableModule, MatCheckboxModule]
})
export class ActivityGridModule {}
