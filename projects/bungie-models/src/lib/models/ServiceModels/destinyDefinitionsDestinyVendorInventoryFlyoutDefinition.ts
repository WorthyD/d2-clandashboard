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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsDestinyVendorInventoryFlyoutBucketDefinition } from './destinyDefinitionsDestinyVendorInventoryFlyoutBucketDefinition';

/**
 * The definition for an \"inventory flyout\": a UI screen where we show you part of an otherwise hidden vendor inventory: like the Vault inventory buckets.
 */
export interface DestinyDefinitionsDestinyVendorInventoryFlyoutDefinition {
  /**
   * If the flyout is locked, this is the reason why.
   */
  lockedDescription?: string;
  /**
   * The title and other common properties of the flyout.
   */
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
  /**
   * A list of inventory buckets and other metadata to show on the screen.
   */
  buckets?: Array<DestinyDefinitionsDestinyVendorInventoryFlyoutBucketDefinition>;
  /**
   * An identifier for the flyout, in case anything else needs to refer to them.
   */
  flyoutId?: number;
  /**
   * If this is true, don\'t show any of the glistening \"this is a new item\" UI elements, like we show on the inventory items themselves in in-game UI.
   */
  suppressNewness?: boolean;
  /**
   * If this flyout is meant to show you the contents of the player\'s equipment slot, this is the slot to show.
   */
  equipmentSlotHash?: number;
}
