import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanMemberActivityComponent } from './clan-member-activity.component';
import { Routes, RouterModule } from '@angular/router';
import { ClanRosterActivityTableModule, SharedModule } from '@destiny/components';

const routes: Routes = [
  {
    path: '',
    component: ClanMemberActivityComponent,
    data: { title: 'd2.clan.activity' }
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ClanMemberActivityRoutingModule {}

@NgModule({
  declarations: [ClanMemberActivityComponent],
  imports: [ClanMemberActivityRoutingModule, ClanRosterActivityTableModule, CommonModule, SharedModule]
})
export class ClanMemberActivityModule {}
