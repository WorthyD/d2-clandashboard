import { GroupsV2GroupMember } from 'bungie-api-angular';

export interface ClanMember extends GroupsV2GroupMember {
    // Needed for DB
    id?: number;
}
