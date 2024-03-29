import { Injectable } from '@angular/core';

import {
  catchError,
  map,
  switchMap,
  tap,
  distinctUntilChanged,
  first,
  take,
  filter,
  withLatestFrom,
  delay
} from 'rxjs/operators';
import {
  DataService,
  MilestoneDefinitionService,
  ActivitiesService,
  ActivityModeService,
  PresentationNodeDefinitionService
} from '@destiny/data';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {
  constructor(
    private data: DataService,
    private activityService: ActivitiesService,
    private activityModeService: ActivityModeService,
    private milestoneDefinitionService: MilestoneDefinitionService,
    private presentationNodeDefinitionService: PresentationNodeDefinitionService
  ) {}

  // TODO: Call for api/settings and look at destiny2CoreSettings
  loadManifest() {
    console.time('loadManifest');
    const tables = [
      //            'DestinyChecklistDefinition',
      //            'DestinyObjectiveDefinition',
      //'DestinyStatDefinition',
      //            'DestinyVendorDefinition',
      //            'DestinyInventoryItemDefinition',
      //            'DestinyClassDefinition',
      //            'DestinySandboxPerkDefinition',
      //            'DestinyEnergyTypeDefinition',
      //'DestinyCollectibleDefinition',
      'DestinyPresentationNodeDefinition',
      //'DestinyRecordDefinition',
      'DestinySeasonDefinition',
      //'DestinySeasonPassDefinition',
      'DestinyMilestoneDefinition',
      'DestinyActivityDefinition',
      'DestinyActivityModeDefinition'
      //            'DestinyPlaceDefinition',
      //            'DestinyFactionDefinition'
    ];
    return this.data
      .loadManifestData('en', tables)
      .then((x) => {
        if (x && x.data) {
          if (x.data.DestinyActivityModeDefinition) {
            this.activityModeService.initializeCache(x.data.DestinyActivityModeDefinition);
          }
          if (x.data.DestinyActivityDefinition) {
            this.activityService.initializeCache(x.data.DestinyActivityDefinition);
          }

          if (x.data.DestinyMilestoneDefinition) {
            this.milestoneDefinitionService.initializeCache(x.data.DestinyMilestoneDefinition);
          }
          if (x.data.DestinyPresentationNodeDefinition) {
            this.presentationNodeDefinitionService.initializeCache(x.data.DestinyPresentationNodeDefinition);
          }
        }

        console.timeEnd('loadManifest');
        return true;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
