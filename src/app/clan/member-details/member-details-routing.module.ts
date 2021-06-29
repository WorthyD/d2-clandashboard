// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { MemberDetailsComponent } from './member-details.component';

// const routes: Routes = [
//     {
//         path: ':memberId',
//         component: MemberDetailsComponent,
//         children: [
//             {
//                 path: '',
//                 loadChildren:
//                 () => import('./member-overview/member-overview.module').then(m => m.MemberOverviewModule)
//             },
//             {
//                 path: 'activity',
//                 loadChildren: () => import('./member-activity/member-activity.module').then(m => m.MemberActivityModule)
//             },
//             // { path: '**', redirectTo: '../' }
//         ]
//     }
// ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class MemberDetailsRoutingModule {}
// // TODO: clean up routing and pre-load nonsense https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards
