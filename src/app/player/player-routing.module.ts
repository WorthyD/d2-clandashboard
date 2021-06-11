import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerOverviewComponent } from '../shared/components/player/player-overview/player-overview.component';
import { PlayerActivityComponent } from '../shared/components/player/player-activity/player-activity.component';

const routes: Routes = [
  {
    path: ':memberId',
    component: PlayerDetailsContainerComponent,
    children: [
      {
        path: '',
        component: PlayerOverviewComponent
      },
      {
        path: 'activity',
        component: PlayerActivityComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {}
