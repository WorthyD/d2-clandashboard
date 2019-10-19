import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanSearchComponent } from './clan-search/clan-search.component';

const routes: Routes = [
  { path: '', component: ClanSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
