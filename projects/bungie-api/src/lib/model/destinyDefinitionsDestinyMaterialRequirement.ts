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
 * Many actions relating to items require you to expend materials: - Activating a talent node - Inserting a plug into a socket The items will refer to material requirements by a materialRequirementsHash in these cases, and this is the definition for those requirements in terms of the item required, how much of it is required and other interesting info. This is one of the rare/strange times where a single contract class is used both in definitions *and* in live data response contracts. I'm not sure yet whether I regret that.
 */
export interface DestinyDefinitionsDestinyMaterialRequirement { 
    /**
     * The hash identifier of the material required. Use it to look up the material's DestinyInventoryItemDefinition.
     */
    itemHash?: number;
    /**
     * If True, the material will be removed from the character's inventory when the action is performed.
     */
    deleteOnAction?: boolean;
    /**
     * The amount of the material required.
     */
    count?: number;
    /**
     * If True, this requirement is \"silent\": don't bother showing it in a material requirements display. I mean, I'm not your mom: I'm not going to tell you you *can't* show it. But we won't show it in our UI.
     */
    omitFromRequirements?: boolean;
}

