import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';

@NgModule({
    declarations: [ClanRosterListViewComponent],
    exports: [ClanRosterListViewComponent],
    imports: [CommonModule]
})
export class ClanRosterListViewModule {}
