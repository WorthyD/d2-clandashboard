import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOverviewComponent } from './member-overview.component';
import {
    ActivityGridModule,
    MemberOverviewModule as MemberOverviewComponentModule,
    CharacterCardModule,
    SeasonPassModule,
} from '@destiny/components';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MemberOverviewComponent,
        data: { title: 'd2.clan.member.overview' }
    },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class OverviewRoutingModule {}

@NgModule({
    declarations: [MemberOverviewComponent],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        MemberOverviewComponentModule,
        CharacterCardModule,
        ActivityGridModule,
        SeasonPassModule,
    ],
})
export class MemberOverviewModule {}
