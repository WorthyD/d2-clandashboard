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
import { DestinyDefinitionsMilestonesDestinyMilestoneChallengeActivityGraphNodeEntry } from './destinyDefinitionsMilestonesDestinyMilestoneChallengeActivityGraphNodeEntry';
import { DestinyDefinitionsMilestonesDestinyMilestoneChallengeActivityPhase } from './destinyDefinitionsMilestonesDestinyMilestoneChallengeActivityPhase';
import { DestinyDefinitionsMilestonesDestinyMilestoneChallengeDefinition } from './destinyDefinitionsMilestonesDestinyMilestoneChallengeDefinition';


export interface DestinyDefinitionsMilestonesDestinyMilestoneChallengeActivityDefinition { 
    /**
     * The activity for which this challenge is active.
     */
    activityHash?: number;
    challenges?: Array<DestinyDefinitionsMilestonesDestinyMilestoneChallengeDefinition>;
    /**
     * If the activity and its challenge is visible on any of these nodes, it will be returned.
     */
    activityGraphNodes?: Array<DestinyDefinitionsMilestonesDestinyMilestoneChallengeActivityGraphNodeEntry>;
    /**
     * Phases related to this activity, if there are any.  These will be listed in the order in which they will appear in the actual activity.
     */
    phases?: Array<DestinyDefinitionsMilestonesDestinyMilestoneChallengeActivityPhase>;
}

