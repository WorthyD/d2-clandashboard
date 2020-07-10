import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profiles/profile.service';
import { ClanDatabase } from './ClanDatabase';
import { ClanDetailsService } from './clan-details/clan-details.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProfileService, ClanDetailsService, ClanDatabase]
})
export class ClanDbModule {}
