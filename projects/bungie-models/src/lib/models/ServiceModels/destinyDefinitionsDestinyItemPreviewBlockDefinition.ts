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
import { DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition } from './destinyDefinitionsItemsDestinyDerivedItemCategoryDefinition';

/**
 * Items like Sacks or Boxes can have items that it shows in-game when you view details that represent the items you can obtain if you use or acquire the item.  This defines those categories, and gives some insights into that data\'s source.
 */
export interface DestinyDefinitionsDestinyItemPreviewBlockDefinition {
  /**
   * A string that the game UI uses as a hint for which detail screen to show for the item. You, too, can leverage this for your own custom screen detail views. Note, however, that these are arbitrarily defined by designers: there\'s no guarantees of a fixed, known number of these - so fall back to something reasonable if you don\'t recognize it.
   */
  screenStyle?: string;
  /**
   * If the preview data is derived from a fake \"Preview\" Vendor, this will be the hash identifier for the DestinyVendorDefinition of that fake vendor.
   */
  previewVendorHash?: number;
  /**
   * If this item should show you Artifact information when you preview it, this is the hash identifier of the DestinyArtifactDefinition for the artifact whose data should be shown.
   */
  artifactHash?: number;
  /**
   * If the preview has an associated action (like \"Open\"), this will be the localized string for that action.
   */
  previewActionString?: string;
  /**
   * This is a list of the items being previewed, categorized in the same way as they are in the preview UI.
   */
  derivedItemCategories?: Array<DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition>;
}
