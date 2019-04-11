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
 * If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it, this will return the vendor in question.   It also contains information we need to determine whether that vendor is actually relevant at the moment, given the user's current state.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition { 
    /**
     * The hash of the vendor whose wares should be shown as associated with the Milestone.
     */
    vendorHash?: number;
}

