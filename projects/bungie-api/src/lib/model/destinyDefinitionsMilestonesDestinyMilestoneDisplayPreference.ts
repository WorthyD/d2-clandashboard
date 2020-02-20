/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A hint for the UI as to what display information ought to be shown. Defaults to showing the static MilestoneDefinition's display properties.   If for some reason the indicated property is not populated, fall back to the MilestoneDefinition.displayProperties.
 */
export type DestinyDefinitionsMilestonesDestinyMilestoneDisplayPreference = 0 | 1 | 2;

export const DestinyDefinitionsMilestonesDestinyMilestoneDisplayPreference = {
    NUMBER_0: 0 as DestinyDefinitionsMilestonesDestinyMilestoneDisplayPreference,
    NUMBER_1: 1 as DestinyDefinitionsMilestonesDestinyMilestoneDisplayPreference,
    NUMBER_2: 2 as DestinyDefinitionsMilestonesDestinyMilestoneDisplayPreference
};