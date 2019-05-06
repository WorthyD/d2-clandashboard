import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanDetailComponent } from './clan/clan-detail/clan-detail.component';

const routes: Routes = [{ path: '', component: ClanDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
