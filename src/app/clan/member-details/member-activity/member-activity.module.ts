import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberActivityComponent } from './member-activity.component';

import { ActivityGridModule } from '@destiny/components';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: MemberActivityComponent
    }
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ActivityRoutingModule {}

@NgModule({
    declarations: [MemberActivityComponent],
    imports: [CommonModule, ActivityRoutingModule, ActivityGridModule]
})
export class MemberActivityModule {}
