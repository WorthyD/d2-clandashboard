import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberActivityStat, ActivityModeDefinition, ActivityDefinition } from 'bungie-models';
import { rowsAnimation } from '../../core/animations/table-row';

export interface MemberActivityGridItem {
    playerActivity: MemberActivityStat;
    activityModeDefinition: ActivityModeDefinition;
    activityDefinition: ActivityDefinition;
}

@Component({
    selector: 'lib-activity-grid',
    templateUrl: './activity-grid.component.html',
    styleUrls: ['./activity-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [rowsAnimation]
})
export class ActivityGridComponent implements OnInit {
    displayedColumns: string[] = ['icon', 'type', 'didComplete','duration',  'when'];

    @Input()
    activityItems: MemberActivityGridItem[];

    constructor() {}

    ngOnInit(): void {}
}
