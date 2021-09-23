/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDyeReference } from './destinyDyeReference';

/**
 * Bare minimum summary information for an item, for the sake of 3D rendering the item.
 */
export interface DestinyCharacterDestinyItemPeerView {
  /**
   * The hash identifier of the item in question. Use it to look up the DestinyInventoryItemDefinition of the item for static rendering data.
   */
  itemHash?: number;
  /**
   * The list of dyes that have been applied to this item.
   */
  dyes?: Array<DestinyDyeReference>;
}
