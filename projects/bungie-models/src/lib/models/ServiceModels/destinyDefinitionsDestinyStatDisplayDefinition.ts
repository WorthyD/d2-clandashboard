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
import { InterpolationInterpolationPoint } from './interpolationInterpolationPoint';

/**
 * Describes the way that an Item Stat (see DestinyStatDefinition) is transformed using the DestinyStatGroupDefinition related to that item. See both of the aforementioned definitions for more information about the stages of stat transformation.  This represents the transformation of a stat into a \"Display\" stat (the closest value that BNet can get to the in-game display value of the stat)
 */
export interface DestinyDefinitionsDestinyStatDisplayDefinition {
  /**
   * The hash identifier for the stat being transformed into a Display stat.  Use it to look up the DestinyStatDefinition, or key into a DestinyInventoryItemDefinition\'s stats property.
   */
  statHash?: number;
  /**
   * Regardless of the output of interpolation, this is the maximum possible value that the stat can be. It should also be used as the upper bound for displaying the stat as a progress bar (the minimum always being 0)
   */
  maximumValue?: number;
  /**
   * If this is true, the stat should be displayed as a number. Otherwise, display it as a progress bar. Or, you know, do whatever you want. There\'s no displayAsNumeric police.
   */
  displayAsNumeric?: boolean;
  /**
   * The interpolation table representing how the Investment Stat is transformed into a Display Stat.   See DestinyStatDefinition for a description of the stages of stat transformation.
   */
  displayInterpolation?: Array<InterpolationInterpolationPoint>;
}
