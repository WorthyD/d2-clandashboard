import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberActivityComponent } from './member-activity.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: MemberActivityComponent
    }
];

@NgModule({
    declarations: [MemberActivityComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberActivityModule {}
