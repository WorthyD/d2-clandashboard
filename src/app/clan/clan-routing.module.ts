import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan-search/clan-search.component';

const routes: Routes = [
  { path: ':clanId', component: ClanDetailComponent },
  { path: '', component: ClanSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule {}
// TODO: clean up routing and pre-load nonsense https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards
