import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SealsComponent } from './seals.component';
import { SealDetailsComponent } from './seal-details/seal-details.component';

const routes: Routes = [
  {
    path: '',
    component: SealsComponent,
    data: { title: 'd2.clan.seals' }
  },
  {
    path: ':sealHash',
    component: SealDetailsComponent,
    data: { title: 'd2.clan.seals.details' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SealsRoutingModule {}
