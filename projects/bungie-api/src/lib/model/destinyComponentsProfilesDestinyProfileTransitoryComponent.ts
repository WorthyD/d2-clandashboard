/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyComponentsProfilesDestinyProfileTransitoryCurrentActivity } from './destinyComponentsProfilesDestinyProfileTransitoryCurrentActivity';
import { DestinyComponentsProfilesDestinyProfileTransitoryJoinability } from './destinyComponentsProfilesDestinyProfileTransitoryJoinability';
import { DestinyComponentsProfilesDestinyProfileTransitoryPartyMember } from './destinyComponentsProfilesDestinyProfileTransitoryPartyMember';
import { DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry } from './destinyComponentsProfilesDestinyProfileTransitoryTrackingEntry';


/**
 * This is an experimental set of data that Bungie considers to be \"transitory\" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.  This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
 */
export interface DestinyComponentsProfilesDestinyProfileTransitoryComponent { 
    /**
     * If you have any members currently in your party, this is some (very) bare-bones information about those members.
     */
    partyMembers?: Array<DestinyComponentsProfilesDestinyProfileTransitoryPartyMember>;
    /**
     * If you are in an activity, this is some transitory info about the activity currently being played.
     */
    currentActivity?: DestinyComponentsProfilesDestinyProfileTransitoryCurrentActivity;
    /**
     * Information about whether and what might prevent you from joining this person on a fireteam.
     */
    joinability?: DestinyComponentsProfilesDestinyProfileTransitoryJoinability;
    /**
     * Information about tracked entities.
     */
    tracking?: Array<DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry>;
    /**
     * The hash identifier for the DestinyDestinationDefinition of the last location you were orbiting when in orbit.
     */
    lastOrbitedDestinationHash?: number;
}
