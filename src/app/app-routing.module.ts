import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanSearchComponent } from './clan-search/clan-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clan', loadChildren: () => import('./clan/clan.module').then((m) => m.ClanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
