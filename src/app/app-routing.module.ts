import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanDetailComponent } from './clan/clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan/clan-search/clan-search.component';

const routes: Routes = [
  { path: ':id', component: ClanDetailComponent },
  { path: '', component: ClanSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
