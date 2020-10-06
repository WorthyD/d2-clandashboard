import { Component, OnInit } from '@angular/core';
import { ActivitiesService, PresentationNodeDefinitionService } from '@destiny/data';
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
  constructor(private x: MemberActivityStatsService, private presentationNodeService: ActivitiesService) {}

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

  user = this.x.getMemberCharacterActivityStatsSerializedGETALL(2073131, this.profile, '2305843009310516628');
  rootSealNode = this.presentationNodeService.getDefinitions();

  prophecy = this.user.pipe(
    map((x) => {
      return x.activities.find((y) => y.activityHash === 4148187374);
    })
  );

  stuff = this.user.pipe(
    map((x) => {
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
      return retVal;
    })
  );
  //rootSealNode = this.presentationNodeService.getDefinitions(2163254576);

  ngOnInit(): void {}
}
