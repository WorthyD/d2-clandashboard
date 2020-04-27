import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
    selector: 'lib-class-cell',
    template: `
        <mat-icon [svgIcon]="getIcon()"></mat-icon>
        {{ (profile?.characters.data)[characterHash].light }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassCellComponent implements OnInit {
    @Input() characterHash: string;

    @Input() profile: MemberProfile;

    constructor() {}

    ngOnInit(): void {}

    getIcon(): string {
        const classType = (this.profile?.characters.data)[this.characterHash].classType;
        switch (classType) {
            case 0:
                return 'titan';
            case 1:
                return 'hunter';
            case 2:
                return 'warlock';
        }
    }
}
