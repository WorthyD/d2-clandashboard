import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanSearchComponent } from './clan-search/clan-search.component';
import { PageComponent } from './player-search/page/page.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './home/home.guard';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [HomeGuard], data: { title: 'd2.clan.home' } },
  { path: 'player-search', component: PageComponent },
  { path: 'player', loadChildren: () => import('./player/player.module').then((m) => m.PlayerModule) },
  { path: 'clan', loadChildren: () => import('./clan/clan.module').then((m) => m.ClanModule) }
];

if (environment.production === false) {
  routes.push({ path: 'sandbox', loadChildren: () => import('./sandbox/sandbox.module').then((m) => m.SandboxModule) });
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
