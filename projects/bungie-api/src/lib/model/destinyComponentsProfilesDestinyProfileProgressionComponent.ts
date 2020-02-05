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
import { DestinyArtifactsDestinyArtifactProfileScoped } from './destinyArtifactsDestinyArtifactProfileScoped';


/**
 * The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?  This will include information such as Checklist info.
 */
export interface DestinyComponentsProfilesDestinyProfileProgressionComponent { 
    /**
     * The set of checklists that can be examined on a profile-wide basis, keyed by the hash identifier of the Checklist (DestinyChecklistDefinition)  For each checklist returned, its value is itself a Dictionary keyed by the checklist's hash identifier with the value being a boolean indicating if it's been discovered yet.
     */
    checklists?: { [key: string]: { [key: string]: boolean; }; };
    /**
     * Data related to your progress on the current season's artifact that is the same across characters.
     */
    seasonalArtifact?: DestinyArtifactsDestinyArtifactProfileScoped;
}

