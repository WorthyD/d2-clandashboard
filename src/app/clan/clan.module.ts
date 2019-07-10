import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan-search/clan-search.component';

@NgModule({
  declarations: [ClanDetailComponent, ClanSearchComponent],
  imports: [CommonModule]
})
export class ClanModule {}
