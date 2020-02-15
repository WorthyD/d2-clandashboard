import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { MemberActivityComponent } from './member-activity/member-activity.component';

const routes: Routes = [
    {
        path: '',
        component: MemberDetailsComponent,
        children: [
            {
                path: '',
                loadChildren:
                () => import('./member-activity/member-activity.module').then(m => m.MemberActivityModule)
            }

        ]
    },

];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule],
    })
export class MemberDetailsRoutingModule {}

@NgModule({
    declarations: [MemberDetailsComponent],
    imports: [CommonModule, MemberDetailsRoutingModule, MatListModule, MatSidenavModule],
    exports: [MemberDetailsComponent]
})
export class MemberDetailsModule {}
