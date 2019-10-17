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
import { DestinyDefinitionsDestinyItemSetBlockEntryDefinition } from './destinyDefinitionsDestinyItemSetBlockEntryDefinition';


/**
 * Primarily for Quests, this is the definition of properties related to the item if it is a quest and its various quest steps.
 */
export interface DestinyDefinitionsDestinyItemSetBlockDefinition { 
    /**
     * A collection of hashes of set items, for items such as Quest Metadata items that possess this data.
     */
    itemList?: Array<DestinyDefinitionsDestinyItemSetBlockEntryDefinition>;
    /**
     * If true, items in the set can only be added in increasing order, and adding an item will remove any previous item. For Quests, this is by necessity true. Only one quest step is present at a time, and previous steps are removed as you advance in the quest.
     */
    requireOrderedSetItemAdd?: boolean;
    /**
     * If true, the UI should treat this quest as \"featured\"
     */
    setIsFeatured?: boolean;
    /**
     * A string identifier we can use to attempt to identify the category of the Quest.
     */
    setType?: string;
}
