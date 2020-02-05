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
import { DestinyDefinitionsArtifactsDestinyArtifactTierItemDefinition } from './destinyDefinitionsArtifactsDestinyArtifactTierItemDefinition';


export interface DestinyDefinitionsArtifactsDestinyArtifactTierDefinition { 
    /**
     * An identifier, unique within the Artifact, for this specific tier.
     */
    tierHash?: number;
    /**
     * The human readable title of this tier, if any.
     */
    displayTitle?: string;
    /**
     * A string representing the localized minimum requirement text for this Tier, if any.
     */
    progressRequirementMessage?: string;
    /**
     * The items that can be earned within this tier.
     */
    items?: Array<DestinyDefinitionsArtifactsDestinyArtifactTierItemDefinition>;
    /**
     * The minimum number of \"unlock points\" that you must have used before you can unlock items from this tier.
     */
    minimumUnlockPointsUsedRequirement?: number;
}

