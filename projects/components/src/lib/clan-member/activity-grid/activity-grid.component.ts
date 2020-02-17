import { Component, OnInit, Input } from '@angular/core';
import { MemberActivityStat, ActivityModeDefinition, ActivityDefinition } from 'bungie-models';

export interface MemberActivityGridItem {
    playerActivity: MemberActivityStat;
    activityModeDefinition: ActivityModeDefinition;
    activityDefinition: ActivityDefinition;
}

@Component({
    selector: 'lib-activity-grid',
    templateUrl: './activity-grid.component.html',
    styleUrls: ['./activity-grid.component.scss']
})
export class ActivityGridComponent implements OnInit {
    displayedColumns: string[] = ['icon', 'type', 'didComplete','duration',  'when'];

    @Input()
    activityItems: MemberActivityGridItem[];

    constructor() {}

    ngOnInit(): void {}
}
