import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GambitComponent } from './gambit.component';
import { GambitRoutingModule } from './gambit-routing.module';
import {ClanGambitStatsModule} from '@destiny/components';

@NgModule({
  declarations: [GambitComponent],
  imports: [CommonModule, GambitRoutingModule, ClanGambitStatsModule]
})
export class GambitModule {}
