import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { MaterialModule, PipesModule } from '@destiny/components';
import { ActivityTimeChartModule } from './activity-time-chart/activity-time-chart.module';
import { PlayerDetailsComponent } from '../../shared/components/player/player-details/player-details.component';

import { PlayerModule as PlayerComponentsModule } from '../../shared/components/player/player.module';
import { PlayerService } from './player.service';
import { PlayerActivityService } from './player-activity.service';

import { PlayerService as BasePlayerService } from '../../shared/components/player/player.service';
import { PlayerActivityService as BasePlayerActivityService } from '../../shared/components/player/player-activity.service';

import { PlayerOverviewComponent } from '../../shared/components/player/player-overview/player-overview.component';

const routes: Routes = [
  {
    path: ':memberId',
    component: MemberDetailsComponent,
    children: [
      {
        path: '',
        component: PlayerOverviewComponent
      },
      {
        path: 'activity',
        loadChildren: () => import('./member-activity/member-activity.module').then((m) => m.MemberActivityModule)
      }
      // { path: '**', redirectTo: '../' }
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MemberDetailsRoutingModule {}

@NgModule({
  declarations: [MemberDetailsComponent],
  imports: [
    CommonModule,
    MemberDetailsRoutingModule,
    PlayerComponentsModule,
    MatSidenavModule,
    MaterialModule,
    PipesModule,
    ActivityTimeChartModule
  ],
  exports: [MemberDetailsComponent],
  providers: [
    DecimalPipe,
    PlayerService,
    PlayerActivityService,
    {
      provide: BasePlayerService,
      useExisting: PlayerService
    },
    {
      provide: BasePlayerActivityService,
      useExisting: PlayerActivityService
    }
  ]
})
export class MemberDetailsModule {}
