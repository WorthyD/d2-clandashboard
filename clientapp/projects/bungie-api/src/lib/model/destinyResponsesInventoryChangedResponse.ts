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
import { DestinyEntitiesItemsDestinyItemComponent } from './destinyEntitiesItemsDestinyItemComponent';


/**
 * A response containing all of the components for all requested vendors.
 */
export interface DestinyResponsesInventoryChangedResponse { 
    /**
     * Items that appeared in the inventory possibly as a result of an action.
     */
    addedInventoryItems?: Array<DestinyEntitiesItemsDestinyItemComponent>;
    /**
     * Items that disappeared from the inventory possibly as a result of an action.
     */
    removedInventoryItems?: Array<DestinyEntitiesItemsDestinyItemComponent>;
}

