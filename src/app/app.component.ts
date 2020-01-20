import { Component } from '@angular/core';

import { DataService, ActivitiesService, ActivityModeService } from '@destiny/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'destiny-dashboard';
    constructor(private data: DataService, private activityService: ActivitiesService, private activityModeService: ActivityModeService) {
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
            'DestinyActivityDefinition',
            'DestinyActivityModeDefinition'
            //            'DestinyPlaceDefinition',
            //            'DestinyFactionDefinition'
        ];
        data.loadManifestData('en', tables, null, null).subscribe(x => {
            if (x && x.data && x.data.DestinyActivityModeDefinition) {
                this.activityModeService.initializeCache(x.data.DestinyActivityModeDefinition);
            }
            if (x && x.data && x.data.DestinyActivityDefinition) {
                this.activityService.initializeCache(x.data.DestinyActivityDefinition);
            }
            //     this.activityService.initializeCache(x.);
        });
    }
}
