import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanDetailComponent } from './clan-detail/clan-detail.component';
// import { ClanSearchComponent } from './clan-search/clan-search.component';
// import { ClanDetailGuard } from './clan-detail/clan-detail.guard';
import { ClanComponent } from './clan.component';

const routes: Routes = [
  {
    path: ':id',
    component: ClanComponent,
    children: [
      {
        path: '',
        component: ClanDetailComponent
      },
      {
        path: 'roster',
        loadChildren: () => import('./clan-roster/clan-roster.module').then((m) => m.ClanRosterModule)
      },
      {
        path: 'member-details',
        loadChildren: () => import('./member-details/member-details.module').then((m) => m.MemberDetailsModule)
      },
      {
        path: 'seals',
        loadChildren: () => import('./seals/seals.module').then((module) => module.SealsModule)
      },
      {
        path: 'raids',
        loadChildren: () => import('./raids/raids.module').then((module) => module.RaidsModule)
      }
    ]
  } ///,
  //  { path: '', component: ClanSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule {}
// TODO: clean up routing and pre-load nonsense https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards
