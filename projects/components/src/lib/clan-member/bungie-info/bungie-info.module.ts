import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BungieInfoComponent } from './bungie-info.component';
import { MatCardModule } from '@angular/material/card';

import { MaterialModule } from '../../shared/modules/material.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [BungieInfoComponent],
  exports: [BungieInfoComponent],
  imports: [CommonModule, MatCardModule, MaterialModule, PipesModule]
})
export class BungieInfoModule {}
