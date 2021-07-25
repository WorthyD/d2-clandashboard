import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MemberProfile, PresentationNodeDefinition, SealMembers } from 'bungie-models';

@Component({
  selector: 'lib-clan-seal',
  templateUrl: './clan-seal.component.html',
  styleUrls: ['./clan-seal.component.scss']
})
export class ClanSealComponent implements OnInit {
  @Input()
  sealMembers: SealMembers;

  @Input()
  seal: PresentationNodeDefinition;

  @Input()
  members: MemberProfile[];

  @Input()
  isLoading: boolean;


  @Output() viewMember = new EventEmitter<PresentationNodeDefinition>();

  constructor() {}

  ngOnInit(): void {}

  getCompletedMembers() {
    const members = this.sealMembers.members;
    const hash = this.sealMembers.seal.completionRecordHash;
    const completed = members.filter((m) => {
      const records = m.profileRecords.data.records[hash]?.objectives;

      if (records) {
        return records[0]?.progress === records[0]?.completionValue;
      }
      return false;
    });

    return completed;
  }
}
