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
 * These definitions represent faction vendors at different points in the game.  A single faction may contain multiple vendors, or the same vendor available at two different locations.
 */
export interface DestinyDefinitionsDestinyFactionVendorDefinition { 
    /**
     * The faction vendor hash.
     */
    vendorHash?: number;
    /**
     * The hash identifier for a Destination at which this vendor may be located. Each destination where a Vendor may exist will only ever have a single entry.
     */
    destinationHash?: number;
    /**
     * The relative path to the background image representing this Vendor at this location, for use in a banner.
     */
    backgroundImagePath?: string;
}

