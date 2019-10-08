/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GroupsV2GroupMembership } from './groupsV2GroupMembership';
import { QueriesPagedQuery } from './queriesPagedQuery';


export interface GroupsV2GetGroupsForMemberResponse { 
    /**
     * A convenience property that indicates if every membership this user has that is a part of this group are part of an account that is considered inactive - for example, overridden accounts in Cross Save.   The key is the Group ID for the group being checked, and the value is true if the users' memberships for that group are all inactive.
     */
    areAllMembershipsInactive?: { [key: string]: boolean; };
    results?: Array<GroupsV2GroupMembership>;
    totalResults?: number;
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    /**
     * If useTotalResults is true, then totalResults represents an accurate count.  If False, it does not, and may be estimated/only the size of the current page.  Either way, you should probably always only trust hasMore.  This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
     */
    useTotalResults?: boolean;
}

