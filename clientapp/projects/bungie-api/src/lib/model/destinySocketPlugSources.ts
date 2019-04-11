/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.5
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates how a socket is populated, and where you should look for valid plug data. This is a flags enumeration/bitmask field, as you may have to look in multiple sources across multiple components for valid plugs.
 */
export type DestinySocketPlugSources = 0 | 1 | 2 | 4 | 8;

export const DestinySocketPlugSources = {
    NUMBER_0: 0 as DestinySocketPlugSources,
    NUMBER_1: 1 as DestinySocketPlugSources,
    NUMBER_2: 2 as DestinySocketPlugSources,
    NUMBER_4: 4 as DestinySocketPlugSources,
    NUMBER_8: 8 as DestinySocketPlugSources
};
