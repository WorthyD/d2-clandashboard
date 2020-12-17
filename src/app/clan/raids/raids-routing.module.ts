import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//import { SealsComponent } from './seals.component';
import { RaidsComponent } from './raids.component';
import {RaidDetailsAllComponent} from './raid-details-all/raid-details-all.component';

const routes: Routes = [
  {
    path: '',
    component: RaidsComponent,
    data: { title: 'd2.clan.raids' }
  },
  {
    path:'all',
    component: RaidDetailsAllComponent,
    data: { title: 'd2.clan.raids.all' }

  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class RaidRoutingModule {}
