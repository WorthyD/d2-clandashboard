import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSearchComponent } from './clan-search.component';



@NgModule({
  declarations: [ClanSearchComponent],
  exports:[ClanSearchComponent],
  imports: [
    CommonModule
  ]
})
export class ClanSearchModule { }
