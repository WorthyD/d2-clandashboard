/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Represents a season and the number of resets you had in that season.   We do not necessarily - even for progressions with resets - track it over all seasons. So be careful and check the season numbers being returned.
 */
export interface DestinyDestinyProgressionResetEntry { 
    season?: number;
    resets?: number;
}

