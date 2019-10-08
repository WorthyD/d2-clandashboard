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


export interface GroupsV2GroupFeatures { 
    maximumMembers?: number;
    /**
     * Maximum number of groups of this type a typical membership may join. For example, a user may join about 50 General groups with their Bungie.net account. They may join one clan per Destiny membership.
     */
    maximumMembershipsOfGroupType?: number;
    capabilities?: number;
    membershipTypes?: Array<number>;
    /**
     * Minimum Member Level allowed to invite new members to group  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    invitePermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to update group culture  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    updateCulturePermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.
     */
    hostGuidedGamePermissionOverride?: number;
    /**
     * Minimum Member Level allowed to update banner  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    updateBannerPermissionOverride?: boolean;
    /**
     * Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.
     */
    joinLevel?: number;
}

