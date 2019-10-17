import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClanRosterComponent } from './clan-roster.component';

import { ClanRosterListViewModule } from '@destiny/components';

const routes: Routes = [
    {
        path: '',
        component: ClanRosterComponent
    }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ClanRosterRoutingModule {}

@NgModule({
    declarations: [ClanRosterComponent],
    imports: [CommonModule, ClanRosterListViewModule, ClanRosterRoutingModule],
    exports: [ClanRosterComponent]
})
export class ClanRosterModule {}
