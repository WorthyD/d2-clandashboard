import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan-search/clan-search.component';
// import { ClanDetailGuard } from './clan-detail/clan-detail.guard';

const routes: Routes = [
    {
        path: ':id',
        component: ClanDetailComponent,
 //       canActivate: [ClanDetailGuard]
    },
    { path: '', component: ClanSearchComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ClanRoutingModule {}
// TODO: clean up routing and pre-load nonsense https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards
