import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanSearchComponent } from './clan-search/clan-search.component';

const routes: Routes = [
    { path: '', component: ClanSearchComponent },
    { path: 'clan', loadChildren: () => import('./clan/clan.module').then(m => m.ClanModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
