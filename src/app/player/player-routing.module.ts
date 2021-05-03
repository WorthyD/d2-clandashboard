import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';

const routes: Routes = [
  {
    path: ':memberId',
    component: PlayerDetailsContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {}
