import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DungeonsComponent } from './dungeons.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonsComponent,
    data: { title: 'd2.clan.dungeons' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class DungeonRoutingModule {}
