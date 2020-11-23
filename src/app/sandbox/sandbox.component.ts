import { Component, OnInit } from '@angular/core';
import { ActivitiesService, PresentationNodeDefinitionService, ProgressDefinitionService } from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { MemberActivityStatsService } from 'projects/data/src/lib/clan-db/member-activity-stats/member-activity-stats.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  rootSealNode = [];
  constructor(
    private x: MemberActivityStatsService,
    private presentationNodeService: ActivitiesService,
    private progressDefinitionService: ProgressDefinitionService
  ) {
    //const defs = this.presentationNodeService.getDefinitions();
    const defs = this.progressDefinitionService.getDefinitions();
    console.log(defs);

    // tslint:disable-next-line:forin
    for (const prop in defs) {
      this.rootSealNode.push(defs[prop]);
    }
  }

  profile = ({
    profile: {
      data: {
        userInfo: {
          crossSaveOverride: 3,
          applicableMembershipTypes: [1, 2, 3],
          isPublic: true,
          membershipType: 3,
          membershipId: '4611686018467238913',
          displayName: 'WorthyD'
        },
        versionsOwned: 63,
        characterIds: [2305843009310516628, 2305843009319768855, 2305843009319768858],
        seasonHashes: [3612906877, 2007338097, 4035491417, 248573323],
        currentSeasonHash: 248573323,
        currentSeasonRewardPowerCap: 1060
      },
      privacy: 1
    }
  } as unknown) as MemberProfile;

//  https://www.bungie.net/Platform/Destiny2/3/Account/4611686018467238913/Character/305843009310516628/Stats/AggregateActivityStats/
//{{base_url}}/Destiny2/3/Account/4611686018467238913/Character/2305843009310516628/Stats/AggregateActivityStats/
//net/Platform/Destiny2/3/Account/4611686018467238913/Character/305843009310516628/Stats/AggregateActivityStats/
  user = this.x.getMemberCharacterActivityStatsSerializedGETALL(2073131, this.profile, '2305843009310516628' as unknown as number);

  // prophecy = this.user.pipe(
  //   map((x) => {

  //     //return x.activities.find((y) => y.activityHash === 4148187374);
  //   })
  // );

  stuff = this.user.pipe(
    map((x) => {
      console.log(x);
      //console.log(x);

      const retVal = [];
       x.activities.forEach((stat) => {
         retVal.push({
           user: this.rootSealNode[stat.activityHash]?.displayProperties.name,
           id: stat.activityHash
         });
       });

      // if (this.rootSealNode[x.activityHash]) {
      //   return {
      //     name: this.rootSealNode[x.activityHash]
      //   };
      // }
      //return retVal;
      return null;
    })
  );

  ngOnInit(): void {}
}
