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

/**
 * Aggregations of multiple progressions.  These are used to apply rewards to multiple progressions at once. They can sometimes have human readable data as well, but only extremely sporadically.
 */
export interface DestinyDefinitionsDestinyProgressionMappingDefinition {
  /**
   * Infrequently defined in practice. Defer to the individual progressions\' display properties.
   */
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
  /**
   * The localized unit of measurement for progression across the progressions defined in this mapping. Unfortunately, this is very infrequently defined. Defer to the individual progressions\' display units.
   */
  displayUnits?: string;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
   */
  hash?: number;
  /**
   * The index of the entity as it was found in the investment tables.
   */
  index?: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
   */
  redacted?: boolean;
}
