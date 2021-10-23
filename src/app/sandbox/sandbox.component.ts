import { Component, OnInit } from '@angular/core';
import {
  ActivitiesService,
  ActivityModeService,
  ClanMemberActivityService,
  ClanMemberRecentActivityService,
  PresentationNodeDefinitionService
} from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { MemberActivityStatsService } from 'projects/data/src/lib/clan-db/member-activity-stats/member-activity-stats.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivityInfo } from '@destiny/components';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  activityInfo: ActivityInfo = {
    title: 'Card Title',
    color:'',
    activityTypes: [
      { label: 'Strikes', value: '1234' },
      { label: 'Strikes', value: '1234' },
      { label: 'Strikes', value: '1234' }
    ]
  };

  constructor() // private presentationNodeService: ActivitiesService, // private y: ClanMemberActivityService, // private x: MemberActivityStatsService,
  // private activityModeService: ActivityModeService
  {
    // const defs = this.presentationNodeService.getDefinitions();
    // // tslint:disable-next-line:forin
    // for (const prop in defs) {
    //   this.rootSealNode.push(defs[prop]);
    // }
    // const defs2 = this.activityModeService.getDefinitions();
    // // tslint:disable-next-line:forin
    // for (const prop in defs2) {
    //   this.rootSealNode2.push(defs2[prop]);
    // }
    // this.rootSealNode2.sort(function (a, b) {
    //   return a.modeType - b.modeType;
    // });
    // this.y.getAllFromCache(2073131, [this.profile]).then((x) => {
    //   this.blah = x;
    // });
  }

  // profile = ({
  //   profile: {
  //     data: {
  //       userInfo: {
  //         crossSaveOverride: 3,
  //         applicableMembershipTypes: [1, 2, 3],
  //         isPublic: true,
  //         membershipType: 3,
  //         membershipId: '4611686018467238913',
  //         displayName: 'WorthyD'
  //       },
  //       versionsOwned: 63,
  //       characterIds: ['2305843009310516628', '2305843009319768855', '2305843009319768858'],
  //       seasonHashes: [3612906877, 2007338097, 4035491417, 248573323],
  //       currentSeasonHash: 248573323,
  //       currentSeasonRewardPowerCap: 1060
  //     },
  //     privacy: 1
  //   }
  // } as unknown) as MemberProfile;

  ///  user = this.x.getMemberCharacterActivityStatsSerializedGETALL(2073131, this.profile, 305843009310516628);
  //juser = this.y.getMemberActivity(2073131, this.profile);
  //user = this.y.getAllFromCache(2073131, [this.profile]);

  // prophecy = this.user.pipe(
  //   map((x) => {
  //     ///return x.activities.find((y) => y.activityHash === 4148187374);
  //   })
  // );

  // stuff = this.user.pipe(
  //   map((x) => {
  //     //console.log(x);

  //     // const retVal = [];
  //     // x.activities.forEach((stat) => {
  //     //   retVal.push({
  //     //     user: this.rootSealNode[stat.activityHash]?.displayProperties.name,
  //     //     id: stat.activityHash
  //     //   });
  //     // });

  //     // if (this.rootSealNode[x.activityHash]) {
  //     //   return {
  //     //     name: this.rootSealNode[x.activityHash]
  //     //   };
  //     // }
  //     //return retVal;
  //     return null;
  //   })
  // );

  ngOnInit(): void {}
}
