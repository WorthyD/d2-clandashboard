import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SealsComponent } from './seals.component';

const routes: Routes = [
  {
    path: '',
    component: SealsComponent,
    data: { title: 'd2.clan.seals' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SealsRoutingModule {}
