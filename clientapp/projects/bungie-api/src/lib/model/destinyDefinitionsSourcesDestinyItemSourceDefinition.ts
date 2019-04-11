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
import { DestinyDefinitionsDestinyInventoryItemStatDefinition } from './destinyDefinitionsDestinyInventoryItemStatDefinition';


/**
 * Properties of a DestinyInventoryItemDefinition that store all of the information we were able to discern about how the item spawns, and where you can find the item.  Items will have many of these sources, one per level at which it spawns, to try and give more granular data about where items spawn for specific level ranges.
 */
export interface DestinyDefinitionsSourcesDestinyItemSourceDefinition { 
    /**
     * The level at which the item spawns. Essentially the Primary Key for this source data: there will be multiple of these source entries per item that has source data, grouped by the level at which the item spawns.
     */
    level?: number;
    /**
     * The minimum Quality at which the item spawns for this level. Examine DestinyInventoryItemDefinition for more information about what Quality means. Just don't ask Phaedrus about it, he'll never stop talking and you'll have to write a book about it.
     */
    minQuality?: number;
    /**
     * The maximum quality at which the item spawns for this level.
     */
    maxQuality?: number;
    /**
     * The minimum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
     */
    minLevelRequired?: number;
    /**
     * The maximum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
     */
    maxLevelRequired?: number;
    /**
     * The stats computed for this level/quality range.
     */
    computedStats?: { [key: string]: DestinyDefinitionsDestinyInventoryItemStatDefinition; };
    /**
     * The DestinyRewardSourceDefinitions found that can spawn the item at this level.
     */
    sourceHashes?: Array<number>;
}

