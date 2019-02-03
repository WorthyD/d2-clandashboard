import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanDetailsComponent } from './clan-details/clan-details.component';
import { ClanComponent } from './clan.component';

const routes: Routes = [
  { path: '', component: ClanComponent },
  { path: ':id', component: ClanDetailsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule { }
