import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanSearchComponent } from './clan-search/clan-search.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './home/home.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [HomeGuard], data: { title: 'd2.clan.home' } },
  { path: 'clan', loadChildren: () => import('./clan/clan.module').then((m) => m.ClanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
