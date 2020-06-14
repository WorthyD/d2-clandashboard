import { Component } from '@angular/core';

import {
    DataService,
    MilestoneDefinitionService,
    ActivitiesService,
    ActivityModeService
} from '@destiny/data';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from 'projects/components/src/lib/icons/register-icons';

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
        private milestoneDefinitionService: MilestoneDefinitionService,
        iconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer
    ) {
        registerIcons(iconRegistry, domSanitizer);
        // TODO: Call for api/settings and look at destiny2CoreSettings
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
            'DestinySeasonDefinition',
            'DestinySeasonPassDefinition',
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
                    this.milestoneDefinitionService.initializeCache(
                        x.data.DestinyMilestoneDefinition
                    );
                }
            }
            //     this.activityService.initializeCache(x.);
        });
    }
}
