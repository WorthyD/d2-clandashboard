import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { MaterialModule, PipesModule } from '@destiny/components';

const routes: Routes = [
  {
    path: ':memberId',
    component: MemberDetailsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./member-overview/member-overview.module').then((m) => m.MemberOverviewModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./member-activity/member-activity.module').then((m) => m.MemberActivityModule)
      }
      // { path: '**', redirectTo: '../' }
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MemberDetailsRoutingModule {}

@NgModule({
  declarations: [MemberDetailsComponent],
imports: [CommonModule, MemberDetailsRoutingModule, MatSidenavModule, MaterialModule, PipesModule],
  exports: [MemberDetailsComponent]
})
export class MemberDetailsModule {}
