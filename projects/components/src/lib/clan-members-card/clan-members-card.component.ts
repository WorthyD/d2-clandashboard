import {
    Component,
    OnInit,
    Input,
    TemplateRef,
    AfterContentInit,
    ContentChildren,
    QueryList,
    Output,
    EventEmitter,
} from '@angular/core';

import { ClanMemberListItem } from '../models/ClanMemberListItem';
import { TemplateDirective } from '../shared/directives/template.directive';
export { ClanMemberListItem } from '../models/ClanMemberListItem';

@Component({
    selector: 'lib-clan-members-card',
    templateUrl: './clan-members-card.component.html',
    styleUrls: ['./clan-members-card.component.scss'],
})
export class ClanMembersCardComponent implements OnInit {
    @Input()
    cardTitle: string;

    @Input()
    members: ClanMemberListItem[];

    @Input() itemTemplate: TemplateRef<HTMLElement>;

    @Output() viewMember = new EventEmitter<number>();
    memberClick(m: ClanMemberListItem) {
        this.viewMember.emit(m.member.destinyUserInfo.membershipId);
    }
    constructor() {}

    ngOnInit(): void {}
}
