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
import { DestinyDefinitionsMilestonesDestinyMilestoneRewardEntryDefinition } from './destinyDefinitionsMilestonesDestinyMilestoneRewardEntryDefinition';

/**
 * The definition of a category of rewards, that contains many individual rewards.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneRewardCategoryDefinition {
  /**
   * Identifies the reward category. Only guaranteed unique within this specific component!
   */
  categoryHash?: number;
  /**
   * The string identifier for the category, if you want to use it for some end. Guaranteed unique within the specific component.
   */
  categoryIdentifier?: string;
  /**
   * Hopefully this is obvious by now.
   */
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
  /**
   * If this milestone can provide rewards, this will define the sets of rewards that can be earned, the conditions under which they can be acquired, internal data that we\'ll use at runtime to determine whether you\'ve already earned or redeemed this set of rewards, and the category that this reward should be placed under.
   */
  rewardEntries?: { [key: string]: DestinyDefinitionsMilestonesDestinyMilestoneRewardEntryDefinition };
  /**
   * If you want to use BNet\'s recommended order for rendering categories programmatically, use this value and compare it to other categories to determine the order in which they should be rendered. I don\'t feel great about putting this here, I won\'t lie.
   */
  order?: number;
}
