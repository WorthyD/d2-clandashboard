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

/**
 * When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for determining the level and formula used for aggregation.  * CharacterAverage = apply a weighted average using the related DestinyStatGroupDefinition on the DestinyInventoryItemDefinition across the character\'s equipped items. See both of those definitions for details. * Character = don\'t aggregate: the stat should be located and used directly on the character. * Item = don\'t aggregate: the stat should be located and used directly on the item.
 */
export type DestinyDestinyStatAggregationType = 0 | 1 | 2;

export const DestinyDestinyStatAggregationType = {
  NUMBER_0: 0 as DestinyDestinyStatAggregationType,
  NUMBER_1: 1 as DestinyDestinyStatAggregationType,
  NUMBER_2: 2 as DestinyDestinyStatAggregationType
};
