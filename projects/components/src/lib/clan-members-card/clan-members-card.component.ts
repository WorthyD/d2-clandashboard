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
  ChangeDetectionStrategy
} from '@angular/core';

import { ClanMemberListItem } from '../models/ClanMemberListItem';
import { TemplateDirective } from '../shared/directives/template.directive';
import { ClanMember } from 'bungie-models';
export { ClanMemberListItem } from '../models/ClanMemberListItem';

@Component({
  selector: 'lib-clan-members-card',
  templateUrl: './clan-members-card.component.html',
  styleUrls: ['./clan-members-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanMembersCardComponent implements OnInit {
  @Input()
  cardTitle: string;

  @Input()
  members: ClanMemberListItem[];

  @Input() itemTemplate: TemplateRef<HTMLElement>;

  @Output() viewMember = new EventEmitter<ClanMember>();
  memberClick(m: ClanMemberListItem) {
    this.viewMember.emit(m.member);
  }
  constructor() {}

  ngOnInit(): void {}
}
