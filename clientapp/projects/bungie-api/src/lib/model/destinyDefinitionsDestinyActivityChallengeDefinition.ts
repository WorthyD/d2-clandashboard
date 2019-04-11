/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.5
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDestinyItemQuantity } from './destinyDestinyItemQuantity';


/**
 * Represents a reference to a Challenge, which for now is just an Objective.
 */
export interface DestinyDefinitionsDestinyActivityChallengeDefinition { 
    /**
     * The hash for the Objective that matches this challenge. Use it to look up the DestinyObjectiveDefinition.
     */
    objectiveHash?: number;
    /**
     * The rewards as they're represented in the UI. Note that they generally link to \"dummy\" items that give a summary of rewards rather than direct, real items themselves.  If the quantity is 0, don't show the quantity.
     */
    dummyRewards?: Array<DestinyDestinyItemQuantity>;
}

