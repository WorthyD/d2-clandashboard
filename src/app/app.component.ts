import { Component } from '@angular/core';

import { DataService, MilestoneDefinitionService, ActivitiesService, ActivityModeService } from '@destiny/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'destiny-dashboard';
    constructor(
        private data: DataService,
        private activityService: ActivitiesService,
        private activityModeService: ActivityModeService,
        private milestoneDefinitionService: MilestoneDefinitionService
    ) {
        const tables = [
            //            'DestinyChecklistDefinition',
            //            'DestinyObjectiveDefinition',
            //            'DestinyStatDefinition',
            //            'DestinyVendorDefinition',
            //            'DestinyInventoryItemDefinition',
            //            'DestinyClassDefinition',
            //            'DestinySandboxPerkDefinition',
            //            'DestinyEnergyTypeDefinition',
            //            'DestinyCollectibleDefinition',
            //            'DestinyPresentationNodeDefinition',
            //            'DestinyRecordDefinition',
            'DestinyMilestoneDefinition',
            'DestinyActivityDefinition',
            'DestinyActivityModeDefinition'
            //            'DestinyPlaceDefinition',
            //            'DestinyFactionDefinition'
        ];
        data.loadManifestData('en', tables, null, null).subscribe(x => {
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
            }
            //     this.activityService.initializeCache(x.);
        });
    }
}
