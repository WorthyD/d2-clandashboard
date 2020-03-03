import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
    selector: 'lib-class-cell',
    template: `
        {{profile?.characters.data[characterHash].classType}}
        {{profile?.characters.data[characterHash].light}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassCellComponent implements OnInit {
    @Input() characterHash: string;

    @Input() profile: MemberProfile;

    constructor() {}

    ngOnInit(): void {}
}
