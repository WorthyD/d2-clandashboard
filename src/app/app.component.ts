import { Component } from '@angular/core';

import { DataService } from '@destiny/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'destiny-dashboard';
    constructor(private data: DataService) {
        console.log('load manifest');
        const tables = [
            'DestinyChecklistDefinition',
            'DestinyObjectiveDefinition',
            'DestinyStatDefinition',
            'DestinyVendorDefinition',
            'DestinyInventoryItemDefinition',
            'DestinyClassDefinition',
            'DestinySandboxPerkDefinition',
            'DestinyEnergyTypeDefinition',
            'DestinyCollectibleDefinition',
            'DestinyPresentationNodeDefinition',
            'DestinyRecordDefinition',
            'DestinyActivityModeDefinition',
            'DestinyPlaceDefinition',
            'DestinyFactionDefinition'
        ];
        data.loadManifestData('en', tables, null, null).subscribe(x => {
            console.log('we got it');
            console.log(x);
        });
    }
}
