import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { MemberProfile, ClanMember } from 'bungie-models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { ClanMemberListItem } from '../models/ClanMemberListItem';
import { compare } from '../utilities/compare';
import { rowsAnimation } from '../core/animations/table-row';
import { downloadCSV } from 'projects/data/src/lib/utility/export-to-csv';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { MembershipTypes } from '@destiny/models/enums';

export { ClanMemberListItem } from '../models/ClanMemberListItem';

@Component({
  selector: 'lib-clan-roster-list-view',
  templateUrl: './clan-roster-list-view.component.html',
  styleUrls: ['./clan-roster-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [rowsAnimation]
})
export class ClanRosterListViewComponent {
  displayedColumns: string[] = [
    'memberType',
    'displayName',
    'bungieDisplayName',
    'characters',
    'powerBonus',
    'activeScore',
    'lifetimeScore',
    'joinDate',
    'dateLastPlayed',
    'controls'
  ];
  sortedData: ClanMemberListItem[];

  _members: ClanMemberListItem[];

  @Input()
  isLoading: boolean = true;
  @Input()
  memberProfilesLoading: boolean;

  @Input()
  get members(): ClanMemberListItem[] {
    return this._members;
  }
  set members(value) {
    this._members = value;
    this.sortedData = value.slice();
  }

  @Output() viewMember = new EventEmitter<ClanMember>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  sortData(sort: Sort) {
    const data = this.members.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'bungieDisplayName':
          return compare(
            a.member.bungieNetUserInfo?.displayName?.toLowerCase(), // TODO make sure this doesn't break.
            b.member.bungieNetUserInfo?.displayName?.toLowerCase(),
            isAsc
          );

        case 'displayName':
          return compare(
            a.member.destinyUserInfo.displayName.toLowerCase(), // TODO make sure this doesn't break.
            b.member.destinyUserInfo.displayName.toLowerCase(),
            isAsc
          );
        case 'dateLastPlayed':
          return compare(a.profile?.profile.data.dateLastPlayed, b.profile?.profile.data.dateLastPlayed, isAsc);

        case 'activeScore':
          return compare(
            a.profile?.profileRecords.data.activeScore ?? 0,
            b.profile?.profileRecords.data.activeScore ?? 0,
            isAsc
          );
        case 'lifetimeScore':
          return compare(
            a.profile?.profileRecords.data.lifetimeScore ?? 0,
            b.profile?.profileRecords.data.lifetimeScore ?? 0,
            isAsc
          );
        case 'powerBonus':
          return compare(
            a.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus ?? 0,
            b.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus ?? 0,
            isAsc
          );
        case 'joinDate':
          return compare(a.member?.joinDate, b.member?.joinDate, isAsc);

        case 'characters':
          return compare(this.getHighestLight(a), this.getHighestLight(b), isAsc);
        default:
          return 0;
      }
    });
  }

  // This is probably terribly un-performant, but whatever
  getHighestLight(item: ClanMemberListItem) {
    const lights = item.profile.profile.data.characterIds.map((hash) => {
      return item.profile.characters.data[hash].light;
    });
    return Math.max(...lights);
  }

  memberClick(m: ClanMemberListItem) {
    this.viewMember.emit(m.member);
  }
  export() {
    downloadCSV({ filename: `recent-activity-${formatDate(new Date())}` }, this.applyValues(this.sortedData));
  }
  applyValues(stats: ClanMemberListItem[]) {
    return stats.map((x) => {
      const firstChar = x.profile.profile.data.characterIds[0];
      const secondChar = x.profile.profile.data.characterIds[1];
      const thirdChar = x.profile.profile.data.characterIds[2];

      return {
        'Destiny Membership Id': x.member.destinyUserInfo.membershipId,
        Platform: this.getMembershipType(x.member.destinyUserInfo.membershipType),
        'Destiny Display Name': x.member.destinyUserInfo?.displayName,
        'Bungie Display Name': x.member.bungieNetUserInfo?.displayName,
        'Character One Type': this.getClassType(x.profile.characters.data[firstChar]?.classType) || '',
        'Character One Power': x.profile.characters.data[firstChar]?.light || '',
        'Character Two Type': this.getClassType(x.profile.characters.data[secondChar]?.classType),
        'Character Two Power': x.profile.characters.data[secondChar]?.light || '',
        'Character Three Type': this.getClassType(x.profile.characters.data[thirdChar]?.classType) || '',
        'Character Three Power': x.profile.characters.data[thirdChar]?.light || '',
        'Power Bonus': x.profile?.profileProgression?.data?.seasonalArtifact?.powerBonus,
        'Active Triumph': x.profile?.profileRecords?.data?.activeScore,
        'Lifetime Triumph': x.profile?.profileRecords?.data?.lifetimeScore,
        'Clan Join Date': x.member?.joinDate,
        'Last Played': x.profile?.profile.data.dateLastPlayed
      };
    });
  }

  // TODO: Externalize this
  getClassType(classType) {
    switch (classType) {
      case 0:
        return 'titan';
      case 1:
        return 'hunter';
      case 2:
        return 'warlock';
      default:
        return '';
    }
  }

  // TODO: Externalize this
  getMembershipType(value) {
    switch (value) {
      case MembershipTypes.Xbox:
        return 'xbox';
      case MembershipTypes.Psn:
        return 'playstation';
      case MembershipTypes.Steam:
        return 'steam';
      case MembershipTypes.Stadia:
        return 'stadia';
      default:
        return '';
    }
  }
}
