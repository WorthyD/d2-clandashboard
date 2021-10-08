import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivityInfoModule } from '@destiny/components';

const routes: Routes = [
  {
    path: '',

    component: SandboxComponent,
    data: { title: 'd2.clan.sandbox' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SandboxRoutingModule {}

@NgModule({
  declarations: [SandboxComponent],
  imports: [CommonModule, SandboxRoutingModule, ActivityInfoModule]
})
export class SandboxModule {}
