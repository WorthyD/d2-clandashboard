import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrucibleComponent } from './crucible.component';

const routes: Routes = [
  {
    path: '',
    component: CrucibleComponent,
    data: { title: 'd2.clan.crucible' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class CrucibleRoutingModule {}
