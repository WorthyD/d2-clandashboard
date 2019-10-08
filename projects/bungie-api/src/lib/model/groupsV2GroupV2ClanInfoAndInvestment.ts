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
import { DestinyDestinyProgression } from './destinyDestinyProgression';
import { GroupsV2ClanBanner } from './groupsV2ClanBanner';


/**
 * The same as GroupV2ClanInfo, but includes any investment data.
 */
export interface GroupsV2GroupV2ClanInfoAndInvestment { 
    d2ClanProgressions?: { [key: string]: DestinyDestinyProgression; };
    clanCallsign?: string;
    clanBannerData?: GroupsV2ClanBanner;
}

