import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GambitComponent } from './gambit.component';

const routes: Routes = [
  {
    path: '',
    component: GambitComponent,
    data: { title: 'd2.clan.gambit' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class GambitRoutingModule {}
