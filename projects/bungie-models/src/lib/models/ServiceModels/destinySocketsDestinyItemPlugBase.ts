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

export interface DestinySocketsDestinyItemPlugBase {
  /**
   * The hash identifier of the DestinyInventoryItemDefinition that represents this plug.
   */
  plugItemHash?: number;
  /**
   * If true, this plug has met all of its insertion requirements. Big if true.
   */
  canInsert?: boolean;
  /**
   * If true, this plug will provide its benefits while inserted.
   */
  enabled?: boolean;
  /**
   * If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition\'s plug.insertionRules property, so you can show the reasons why it can\'t be inserted.  This list will be empty if the plug can be inserted.
   */
  insertFailIndexes?: Array<number>;
  /**
   * If a plug is not enabled, this will be populated with indexes into the plug item definition\'s plug.enabledRules property, so that you can show the reasons why it is not enabled.  This list will be empty if the plug is enabled.
   */
  enableFailIndexes?: Array<number>;
}
