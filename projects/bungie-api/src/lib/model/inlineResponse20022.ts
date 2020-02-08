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
import { GroupsV2GroupOptionalConversation } from './groupsV2GroupOptionalConversation';


export interface InlineResponse20022 { 
    Response?: Array<GroupsV2GroupOptionalConversation>;
    message?: string;
    messageData?: { [key: string]: string; };
    errorStatus?: string;
    throttleSeconds?: number;
    detailedErrorTrace?: string;
    errorCode?: number;
}

