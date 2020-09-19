import { ClanMember, MemberActivityRecentStats } from 'bungie-models';

export interface ClanMemberActivityListItem {
    member: ClanMember;
    stats: MemberActivityRecentStats;
}
