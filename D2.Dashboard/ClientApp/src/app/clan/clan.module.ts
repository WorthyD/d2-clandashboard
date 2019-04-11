import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanComponent } from './clan.component';
import { ClanDetailsComponent } from './clan-details/clan-details.component';
import { ClanRoutingModule } from './clan-routing.module';

@NgModule({
  declarations: [
    ClanComponent,
    ClanDetailsComponent
  ],
  imports: [
    CommonModule,
    ClanRoutingModule
  ]
})
export class ClanModule { }
