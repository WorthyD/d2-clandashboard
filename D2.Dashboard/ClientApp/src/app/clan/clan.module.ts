import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanComponent } from './clan.component';
import { ClanDetailsComponent } from './clan-details/clan-details.component';

@NgModule({
  declarations: [ClanComponent, ClanDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ClanModule { }
