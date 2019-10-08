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
import { DestinyRequestsActionsDestinyInsertPlugsRequestEntry } from './destinyRequestsActionsDestinyInsertPlugsRequestEntry';


export interface DestinyRequestsActionsDestinyInsertPlugsActionRequest { 
    /**
     * Action token provided by the AwaGetActionToken API call.
     */
    actionToken?: string;
    /**
     * The instance ID of the item having a plug inserted. Only instanced items can have sockets.
     */
    itemInstanceId?: number;
    /**
     * The plugs being inserted.
     */
    plug?: DestinyRequestsActionsDestinyInsertPlugsRequestEntry;
    characterId?: number;
    membershipType?: number;
}

