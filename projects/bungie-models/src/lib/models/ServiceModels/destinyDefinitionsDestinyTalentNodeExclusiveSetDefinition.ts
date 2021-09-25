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
 * The list of indexes into the Talent Grid\'s \"nodes\" property for nodes in this exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)
 */
export interface DestinyDefinitionsDestinyTalentNodeExclusiveSetDefinition {
  /**
   * The list of node indexes for the exclusive set. Historically, these were indexes. I would have liked to replace this with nodeHashes for consistency, but it\'s way too late for that. (9:09 PM, he\'s right!)
   */
  nodeIndexes?: Array<number>;
}
