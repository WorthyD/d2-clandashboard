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
import { DestinyHistoricalStatsDestinyLeaderboard } from './destinyHistoricalStatsDestinyLeaderboard';


export interface InlineResponse20048 { 
    response?: { [key: string]: { [key: string]: DestinyHistoricalStatsDestinyLeaderboard; }; };
    message?: string;
    messageData?: { [key: string]: string; };
    errorStatus?: string;
    throttleSeconds?: number;
    detailedErrorTrace?: string;
    errorCode?: number;
}

