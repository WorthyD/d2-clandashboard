import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';


const routes: Routes = [
    {
        path: '',
        component: MemberDetailsComponent
    }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MemberDetailsRoutingModule {}

@NgModule({
    declarations: [MemberDetailsComponent],
    imports: [CommonModule, MemberDetailsRoutingModule],
    exports: [MemberDetailsComponent]
})
export class MemberDetailsModule {}
