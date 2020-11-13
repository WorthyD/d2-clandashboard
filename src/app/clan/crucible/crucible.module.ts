import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrucibleComponent } from './crucible.component';
import { CrucibleRoutingModule } from './crucible-routing.module';

@NgModule({
  declarations: [CrucibleComponent],
  imports: [CommonModule, CrucibleRoutingModule]
})
export class CrucibleModule {}
