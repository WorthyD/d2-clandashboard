import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profiles/profile.service';
import { ClanDatabase } from './ClanDatabase';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProfileService, ClanDatabase]
})
export class ClanDbModule {}
