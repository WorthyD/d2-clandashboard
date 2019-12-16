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
        data.loadManifestData('en', null, null).subscribe(x => {});
    }
}
