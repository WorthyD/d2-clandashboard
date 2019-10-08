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


/**
 * The information for how the vendor purchase should override a given socket with custom plug data.
 */
export interface DestinyDefinitionsDestinyVendorItemSocketOverride { 
    /**
     * If this is populated, the socket will be overridden with a specific plug.  If this isn't populated, it's being overridden by something more complicated that is only known by the Game Server and God, which means we can't tell you in advance what it'll be.
     */
    singleItemHash?: number;
    /**
     * If this is greater than -1, the number of randomized plugs on this socket will be set to this quantity instead of whatever it's set to by default.
     */
    randomizedOptionsCount?: number;
    /**
     * This appears to be used to select which socket ultimately gets the override defined here.
     */
    socketTypeHash?: number;
}

