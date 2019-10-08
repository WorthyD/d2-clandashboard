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


export interface DestinyAdvancedAwaAuthorizationResult { 
    /**
     * Indication of how the user responded to the request. If the value is \"Approved\" the actionToken will contain the token that can be presented when performing the advanced write action.
     */
    userSelection?: number;
    responseReason?: number;
    /**
     * Message to the app developer to help understand the response.
     */
    developerNote?: string;
    /**
     * Credential used to prove the user authorized an advanced write action.
     */
    actionToken?: string;
    /**
     * This token may be used to perform the requested action this number of times, at a maximum. If this value is 0, then there is no limit.
     */
    maximumNumberOfUses?: number;
    /**
     * Time, UTC, when token expires.
     */
    validUntil?: Date;
    /**
     * Advanced Write Action Type from the permission request.
     */
    type?: number;
    /**
     * MembershipType from the permission request.
     */
    membershipType?: number;
}

